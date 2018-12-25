package com.acs.rest;

import com.acs.model.Action;
import com.acs.service.ActionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/action")
public class ActionController {

    @Autowired
    private ActionService actionService;

    @RequestMapping(value = "/list/", method = RequestMethod.GET)
    public List<Action> list() {
        return actionService.getAllActions();
    }

    @RequestMapping(method = RequestMethod.POST, consumes = {"application/json"})
    public ResponseEntity createAction(@RequestBody Action action) {
        actionService.save(action);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
    public ResponseEntity createAction(@PathVariable(value = "id") Integer id) {
        actionService.findById(id).ifPresent(a -> actionService.delete(a));
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/{id}", consumes = {"application/json"})
    public ResponseEntity updateAction(@PathVariable(value = "id") Integer id, @RequestBody Action action) {
        actionService.findById(id).ifPresent(a -> actionService.delete(a));
        actionService.save(action);
        return new ResponseEntity(HttpStatus.OK);
    }

}
