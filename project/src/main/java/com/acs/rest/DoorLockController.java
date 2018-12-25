package com.acs.rest;

import com.acs.model.DoorLock;
import com.acs.service.DoorLockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/doorlock")
public class DoorLockController {

    @Autowired
    private DoorLockService doorLockService;

    @RequestMapping(value = "/list/", method = RequestMethod.GET)
    public List<DoorLock> list() {
        return doorLockService.getAllDoorLocks();
    }

    @RequestMapping(method = RequestMethod.POST, consumes = {"application/json"})
    public ResponseEntity createAction(@RequestBody DoorLock doorLock) {
        doorLockService.save(doorLock);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
    public ResponseEntity createAction(@PathVariable(value = "id") Integer id) {
        doorLockService.findById(id).ifPresent(a -> doorLockService.delete(a));
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/{id}", consumes = {"application/json"})
    public ResponseEntity updateAction(@PathVariable(value = "id") Integer id, @RequestBody DoorLock doorLock) {
        doorLockService.findById(id).ifPresent(a -> doorLockService.delete(a));
        doorLockService.save(doorLock);
        return new ResponseEntity(HttpStatus.OK);
    }

}
