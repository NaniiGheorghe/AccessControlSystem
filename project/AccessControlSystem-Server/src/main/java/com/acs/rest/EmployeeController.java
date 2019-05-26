package com.acs.rest;

import com.acs.dto.AccessDTO;
import com.acs.dto.convertor.AccessDTOConverter;
import com.acs.dto.convertor.KeyDTOConverter;
import com.acs.dto.convertor.UserDTOConverter;
import com.acs.model.*;
import com.acs.dto.UserDTO;
import com.acs.service.ApplicationUserSevice;
import com.acs.service.EmployeeService;
import com.acs.service.KeyService;
import com.acs.service.OfficeRoomService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class EmployeeController {


    @Autowired
    private EmployeeService employeeService;

    @Autowired
    private OfficeRoomService officeRoomService;

    @Autowired
    private ApplicationUserSevice applicationUserSevice;

    @Autowired
    private UserDTOConverter userDTOConverter;

    @Autowired
    private AccessDTOConverter accessDTOConverter;

    @Autowired
    private KeyService keyService;

    @Autowired
    private KeyDTOConverter keyDTOConverter;

    @Transactional
    @RequestMapping(value = "/administrator/api/v1/employee/list/", method = RequestMethod.GET)
    public List<UserDTO> list() {
        return employeeService.getAllEmployees().stream()
                .map(userDTOConverter::convertToDto)
                .collect(Collectors.toList());
    }

    @Transactional
    @RequestMapping(value = "/administrator/api/v1/employee/list/access", method = RequestMethod.GET)
    public List<AccessDTO> listOfAccess() {
        List<AccessDTO> accesses = new ArrayList<>();
        employeeService.getAllEmployees()
                .forEach(employee -> {
                    employee.getKeys().forEach(
                            key -> {
                                key.getAccessibleDoorLocks().forEach(
                                        doorLock -> {
                                            officeRoomService.findByDoorLock(doorLock.getId()).ifPresent(
                                                    officeRoom -> {
                                                        accesses.add(accessDTOConverter.convertToDTO(employee, officeRoom.getName(), doorLock));
                                                    }
                                            );
                                        }
                                );
                            }
                    );
                });
        return accesses;
    }

    @Transactional
    @RequestMapping(value = "/administrator/api/v1/employee", method = RequestMethod.POST, consumes = {"application/json"})
    public ResponseEntity createEmployee(@RequestBody UserDTO user) {
        Employee employee = userDTOConverter.convertToEntity(user);
        employee.getKeys().forEach(key -> keyService.save(key));
        applicationUserSevice.save(employee.getUser());
        employeeService.save(employee);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/administrator/api/v1/employee/remove/{id}")
    public ResponseEntity createEmployee(@PathVariable(value = "id") Integer id) {
        employeeService.findById(id).ifPresent(a -> employeeService.delete(a));
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/administrator/api/v1/employee/{id}", consumes = {"application/json"})
    public ResponseEntity updateEmployee(@PathVariable(value = "id") Integer id, @RequestBody Employee employee) {
        employeeService.findById(id).ifPresent(a -> employeeService.delete(a));
        employeeService.save(employee);
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/user/api/v1/employee/request_access/{employee_id}/{room_id}")
    public ResponseEntity requestAccess(@PathVariable(value = "employee_id") Integer employee_id,
                                        @PathVariable(value = "room_id") Integer room_id) {
        employeeService.findById(employee_id).ifPresent(e ->
                employeeService.requestAccess(e, officeRoomService.findById(room_id))
        );
        return new ResponseEntity(HttpStatus.OK);
    }


    @RequestMapping(method = RequestMethod.POST, value = "/administrator/api/v1/employee/give_access/{employee_id}/{doorLock_id}")
    public ResponseEntity giveAccess(@PathVariable(value = "employee_id") Integer employeeId,
                                     @PathVariable(value = "doorLock_id") Integer doorLockId) {
        employeeService.giveAccess(employeeId, doorLockId);
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/administrator/api/v1/employee/remove_access/{employee_id}/{doorLock_id}")
    public ResponseEntity removeAccess(@PathVariable(value = "employee_id") Integer employeeId,
                                       @PathVariable(value = "doorLock_id") Integer doorLockId) {
        employeeService.removeAccess(employeeId, doorLockId);
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(value = "/administrator/api/v1/employee/isValid/{username}/", method = RequestMethod.GET, consumes = {"application/json"})
    public boolean createEmployee(@PathVariable(value = "username") String username) {
        return !employeeService.findByUsername(username).isPresent();
    }

}
