package com.acs.rest;

import com.acs.model.Action;
import com.acs.model.DoorLock;
import com.acs.model.dto.ActionDTO;
import com.acs.service.ActionService;
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
public class ActionController {

    @Autowired
    private ActionService actionService;

    @Autowired
    private ModelMapper modelMapper;

    @Transactional
    @RequestMapping(value = "/user/api/v1/action/list/", method = RequestMethod.GET)
    public List<ActionDTO> list() {
        return actionService.getAllActions().stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    @RequestMapping(value = "/user/api/v1/action", method = RequestMethod.POST, consumes = {"application/json"})
    public ResponseEntity createAction(@RequestBody Action action) {
        actionService.save(action);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/administrator/api/v1/action/{id}")
    public ResponseEntity deleteAction(@PathVariable(value = "id") Integer id) {
        actionService.findById(id).ifPresent(a -> actionService.delete(a));
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/administrator/api/v1/action/{id}", consumes = {"application/json"})
    public ResponseEntity updateAction(@PathVariable(value = "id") Integer id, @RequestBody Action action) {
        actionService.findById(id).ifPresent(a -> actionService.delete(a));
        actionService.save(action);
        return new ResponseEntity(HttpStatus.OK);
    }

    private ActionDTO convertToDto(Action action) {
        ActionDTO actionDTO = modelMapper.map(action, ActionDTO.class);
        actionDTO.setEmployee(action.getEmployee().getFirsName() + " " + action.getEmployee().getLastName());
        actionDTO.setOfficeRoom(action.getOfficeRoom().getName());
        actionDTO.setDoorLock(action.getOfficeRoom().getDoorLocks().stream()
                .map(DoorLock::getId)
                .collect(Collectors.toList()));
        return actionDTO;
    }

    private Optional<Action> convertToEntity(ActionDTO actionDTO) {
        Action action = modelMapper.map(actionDTO, Action.class);
        return actionService.findById(action.getId());
    }

}
