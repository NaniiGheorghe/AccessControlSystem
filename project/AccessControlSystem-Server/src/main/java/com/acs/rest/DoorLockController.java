package com.acs.rest;

import com.acs.model.DoorLock;
import com.acs.service.DoorLockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class DoorLockController {

    @Autowired
    private DoorLockService doorLockService;

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

}
