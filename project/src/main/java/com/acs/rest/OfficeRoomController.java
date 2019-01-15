package com.acs.rest;

import com.acs.model.OfficeRoom;
import com.acs.service.OfficeRoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class OfficeRoomController {

    @Autowired
    private OfficeRoomService officeRoomService;

    @RequestMapping(value = "/user/api/v1/officeroom/list/", method = RequestMethod.GET)
    public List<OfficeRoom> list() {
        return officeRoomService.getAllOfficeRooms();
    }

    @RequestMapping(value = "/administrator/api/v1/officeroom", method = RequestMethod.POST, consumes = {"application/json"})
    public ResponseEntity createOfficeRoom(@RequestBody OfficeRoom officeRoom) {
        officeRoomService.save(officeRoom);
        return new ResponseEntity(HttpStatus.CREATED);
    }


    @RequestMapping(method = RequestMethod.DELETE, value = "/administrator/api/v1/officeroom/{id}")
    public ResponseEntity deleteOfficeRoom(@PathVariable(value = "id") Integer id) {
        officeRoomService.findById(id).ifPresent(a -> officeRoomService.delete(a));
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/administrator/api/v1/officeroom/{id}", consumes = {"application/json"})
    public ResponseEntity updateOfficeRoom(@PathVariable(value = "id") Integer id, @RequestBody OfficeRoom officeRoom) {
        officeRoomService.findById(id).ifPresent(a -> officeRoomService.delete(a));
        officeRoomService.save(officeRoom);
        return new ResponseEntity(HttpStatus.OK);
    }


    @RequestMapping(method = RequestMethod.POST, value = "/user/api/v1/officeroom/accessible_rooms/{employee_id}/")
    public List<OfficeRoom> getAccessibleRooms(@PathVariable(value = "employee_id") Integer employee_id) {
        return officeRoomService.findByEmployeeId(employee_id);
    }

}
