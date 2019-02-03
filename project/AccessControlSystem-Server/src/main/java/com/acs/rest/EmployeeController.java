package com.acs.rest;

import com.acs.model.Action;
import com.acs.model.DoorLock;
import com.acs.model.Employee;
import com.acs.model.Key;
import com.acs.model.dto.ActionDTO;
import com.acs.model.dto.UserDTO;
import com.acs.service.EmployeeService;
import com.acs.service.OfficeRoomService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
public class EmployeeController {


    @Autowired
    private EmployeeService employeeService;

    @Autowired
    private OfficeRoomService officeRoomService;

    @Autowired
    private ModelMapper modelMapper;

    @Transactional
    @RequestMapping(value = "/administrator/api/v1/employee/list/", method = RequestMethod.GET)
    public List<UserDTO> list() {
        return employeeService.getAllEmployees().stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    @Transactional
    @RequestMapping(value = "/administrator/api/v1/employee/list/access", method = RequestMethod.GET)
    public List<UserDTO> listOfAccess() {
        List<UserDTO> accesses = new ArrayList<>();
        employeeService.getAllEmployees()
                .forEach(employee -> {
                    employee.getKeys().forEach(
                            key -> {
                                key.getAccessibleDoorLocks().forEach(
                                        doorLock -> {
                                            officeRoomService.findByDoorLock(doorLock.getId()).ifPresent(
                                                    officeRoom -> {
                                                        accesses.add(convertToDTOAccess(employee, officeRoom.getName(), doorLock.getId()));
                                                    }
                                            );
                                        }
                                );
                            }
                    );
                });
        return accesses;
    }

    @RequestMapping(value = "/administrator/api/v1/employee", method = RequestMethod.POST, consumes = {"application/json"})
    public ResponseEntity createEmployee(@RequestBody Employee employee) {
        employeeService.save(employee);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/administrator/api/v1/employee/{id}")
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


    private UserDTO convertToDto(Employee employee) {
        UserDTO userDTO = new UserDTO();
        userDTO.setId(employee.getId());
        userDTO.setUsergroup(employee.getUser().getUsergroup());
        userDTO.setFirstName(employee.getFirsName());
        userDTO.setLastName(employee.getLastName());
        userDTO.setWorkingRoom(employee.getWorkingRoom().getName());
        userDTO.setKeys(employee.getKeys().stream()
                .map(Key::getId)
                .collect(Collectors.toList()));
        userDTO.setId(employee.getId());
        userDTO.setPosition(employee.getPositions());
        userDTO.setDepartament(employee.getDepartament());
        return userDTO;
    }

    private UserDTO convertToDTOAccess(Employee employee, String accessibleRoom, Integer accessibleDoorLock) {
        UserDTO user = convertToDto(employee);
        user.setAccessibleRoom(accessibleRoom);
        user.setAccessibleRoomDoorLock(accessibleDoorLock);
        return user;
    }


    private Optional<Employee> convertToEntity(UserDTO userDTO) {
        Employee employee = modelMapper.map(userDTO, Employee.class);
        return employeeService.findById(employee.getId());
    }
}
