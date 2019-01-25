package com.acs.rest;

import com.acs.model.DoorLock;
import com.acs.model.Employee;
import com.acs.model.OfficeRoom;
import com.acs.model.dto.RoomDTO;
import com.acs.model.dto.UserDTO;
import com.acs.service.OfficeRoomService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
public class OfficeRoomController {

    @Autowired
    private OfficeRoomService officeRoomService;

    @Autowired
    private ModelMapper modelMapper;

    @Transactional
    @RequestMapping(value = "/user/api/v1/officeroom/list/", method = RequestMethod.GET)
    public List<RoomDTO> list() {
        return officeRoomService.getAllOfficeRooms().stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
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

    private RoomDTO convertToDto(OfficeRoom officeRoom) {
        RoomDTO roomDTO = new RoomDTO();
        roomDTO.setId(officeRoom.getId());
        roomDTO.setName(officeRoom.getName());
        roomDTO.setDoorLocks(officeRoom.getDoorLocks().stream()
                            .map(DoorLock::getId)
                            .collect(Collectors.toList()));
        return roomDTO;
    }

    private Optional<OfficeRoom> convertToEntity(RoomDTO roomDTO) {
        OfficeRoom officeRoom = modelMapper.map(roomDTO, OfficeRoom.class);
        return officeRoomService.findById(roomDTO.getId());
    }
}
