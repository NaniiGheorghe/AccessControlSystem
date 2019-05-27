package com.acs.rest;

import com.acs.dto.convertor.ActionDTOConverter;
import com.acs.model.Action;
import com.acs.dto.ActionDTO;
import com.acs.service.ActionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class ActionController {

    private final ActionService actionService;
    private final ActionDTOConverter actionDTOConverter;

    @Autowired
    public ActionController(ActionService actionService, ActionDTOConverter actionDTOConverter) {
        this.actionService = actionService;
        this.actionDTOConverter = actionDTOConverter;
    }

    @Transactional
    @RequestMapping(value = "/user/api/v1/action/list/", method = RequestMethod.GET)
    public List<ActionDTO> list() {
        return actionService.getAllActions().stream()
                .map(actionDTOConverter::convertToDto)
                .collect(Collectors.toList());
    }

    @RequestMapping(value = "/user/api/v1/action", method = RequestMethod.POST, consumes = {"application/json"})
    public ResponseEntity createAction(@RequestBody Action action) {
        actionService.save(action);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/administrator/api/v1/action/{id}")
    public ResponseEntity deleteAction(@PathVariable(value = "id") Integer id) {
        actionService.findById(id).ifPresent(actionService::delete);
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/administrator/api/v1/action/{id}", consumes = {"application/json"})
    public ResponseEntity updateAction(@PathVariable(value = "id") Integer id, @RequestBody Action action) {
        actionService.findById(id).ifPresent(actionService::delete);
        actionService.save(action);
        return new ResponseEntity(HttpStatus.OK);
    }

}
