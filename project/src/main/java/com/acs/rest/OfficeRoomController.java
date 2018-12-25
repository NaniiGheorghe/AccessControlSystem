package com.acs.rest;

import com.acs.model.OfficeRoom;
import com.acs.service.OfficeRoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/officeroom")
public class OfficeRoomController {

    @Autowired
    private OfficeRoomService officeRoomService;

    @RequestMapping(value = "/list/", method = RequestMethod.GET)
    public List<OfficeRoom> list() {
        return officeRoomService.getAllOfficeRooms();
    }

    @RequestMapping(method = RequestMethod.POST, consumes = {"application/json"})
    public ResponseEntity createAction(@RequestBody OfficeRoom officeRoom) {
        officeRoomService.save(officeRoom);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
    public ResponseEntity createAction(@PathVariable(value = "id") Integer id) {
        officeRoomService.findById(id).ifPresent(a -> officeRoomService.delete(a));
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/{id}", consumes = {"application/json"})
    public ResponseEntity updateAction(@PathVariable(value = "id") Integer id, @RequestBody OfficeRoom officeRoom) {
        officeRoomService.findById(id).ifPresent(a -> officeRoomService.delete(a));
        officeRoomService.save(officeRoom);
        return new ResponseEntity(HttpStatus.OK);
    }

}