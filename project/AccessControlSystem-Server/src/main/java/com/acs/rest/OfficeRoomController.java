package com.acs.rest;

import com.acs.model.DoorLock;
import com.acs.model.Employee;
import com.acs.model.OfficeRoom;
import com.acs.model.dto.DoorDTO;
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

    @RequestMapping(value = "/administrator/api/v1/officeroom/{room_name}/{door_name}/", method = RequestMethod.POST, consumes = {"application/json"})
    public ResponseEntity createOfficeRoom(@PathVariable(value = "room_name") String roomName,
                                           @PathVariable(value = "door_name") String doorName) {
        if (officeRoomService.isValiCombination(roomName, doorName)) {
            officeRoomService.createaRoom(roomName, doorName);
            return new ResponseEntity(HttpStatus.OK);
        } else {
            return ResponseEntity
                    .status(HttpStatus.CONFLICT)
                    .body("This door identifier already exist!");
        }
    }


    @RequestMapping(method = RequestMethod.POST, value = "/administrator/api/v1/officeroom/delete/{id}")
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


    @RequestMapping(method = RequestMethod.GET, value = "/user/api/v1/officeroom/accessible_rooms/{employee_id}/")
    @Transactional
    public List<RoomDTO> getAccessibleRooms(@PathVariable(value = "employee_id") Integer employee_id) {
        return officeRoomService.findAccessibleByEmployeeId(employee_id).stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    @Transactional
    @RequestMapping(method = RequestMethod.GET, value = "/user/api/v1/officeroom/inaccesible_rooms/{employee_id}/")
    public List<RoomDTO> getInnaccessibleRooms(@PathVariable(value = "employee_id") Integer employee_id) {
        return officeRoomService.findInaccessibleByEmployeeId(employee_id).stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    private RoomDTO convertToDto(OfficeRoom officeRoom) {
        RoomDTO roomDTO = new RoomDTO();
        roomDTO.setId(officeRoom.getId());
        roomDTO.setName(officeRoom.getName());
        roomDTO.setDoorLocks(officeRoom.getDoorLocks().stream()
                .map(this::convertDoorLockToDto)
                .collect(Collectors.toList()));
        return roomDTO;
    }

    private DoorDTO convertDoorLockToDto(DoorLock doorLock) {
        DoorDTO doorDTO = new DoorDTO();
        doorDTO.setId(doorLock.getId());
        doorDTO.setName(doorLock.getName());
        return doorDTO;
    }

    private Optional<OfficeRoom> convertDoorLockToEntity(RoomDTO roomDTO) {
        OfficeRoom officeRoom = modelMapper.map(roomDTO, OfficeRoom.class);
        return officeRoomService.findById(roomDTO.getId());
    }

    private Optional<OfficeRoom> convertToEntity(RoomDTO roomDTO) {
        OfficeRoom officeRoom = modelMapper.map(roomDTO, OfficeRoom.class);
        return officeRoomService.findById(roomDTO.getId());
    }


}
