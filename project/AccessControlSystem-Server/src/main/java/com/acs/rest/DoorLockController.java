package com.acs.rest;

import com.acs.model.DoorLock;
import com.acs.model.Employee;
import com.acs.model.dto.RoomDTO;
import com.acs.service.DoorLockService;
import com.acs.service.EmployeeService;
import com.acs.service.OfficeRoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class DoorLockController {

    @Autowired
    private DoorLockService doorLockService;

    @Autowired
    private OfficeRoomService officeRoomService;

    @Autowired
    private EmployeeService employeeService;

    @RequestMapping(value = "/user/api/v1/doorlock/list/", method = RequestMethod.GET)
    public List<DoorLock> list() {
        return doorLockService.getAllDoorLocks();
    }

    @RequestMapping(value = "/administrator/api/v1/doorlock", method = RequestMethod.POST, consumes = {"application/json"})
    public ResponseEntity createDoorLock(@RequestBody DoorLock doorLock) {
        doorLockService.save(doorLock);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/administrator/api/v1/doorlock/{id}")
    public ResponseEntity createDoorLock(@PathVariable(value = "id") Integer id) {
        doorLockService.findById(id).ifPresent(a -> doorLockService.delete(a));
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/administrator/api/v1/doorlock/{id}", consumes = {"application/json"})
    public ResponseEntity updateDoorLock(@PathVariable(value = "id") Integer id, @RequestBody DoorLock doorLock) {
        doorLockService.findById(id).ifPresent(a -> doorLockService.delete(a));
        doorLockService.save(doorLock);
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/administrator/api/v1/officeroom/inaccesible_doorLocks/{employee_id}/{room_id}/")
    @Transactional
    public List<DoorLock> getInnaccessibleDoorLocks(@PathVariable(value = "employee_id") Integer employee_id,
                                                    @PathVariable(value = "room_id") Integer room_id) {
        List<DoorLock> doorLockList = new ArrayList<>();
        Employee employee = employeeService.findById(employee_id).get();

        officeRoomService.findById(room_id).ifPresent(officeRoom -> {
            doorLockList.addAll(officeRoom.getDoorLocks());
        });

        List<DoorLock> allAccessibleDoorLocksByEmployee = new ArrayList<>();

        employee.getKeys().forEach(key -> {
            allAccessibleDoorLocksByEmployee.addAll(key.getAccessibleDoorLocks());
        });

        doorLockList.removeIf(
                doorLock -> {
                    return allAccessibleDoorLocksByEmployee.contains(doorLock);
                }
        );

        return doorLockList;
    }


}
