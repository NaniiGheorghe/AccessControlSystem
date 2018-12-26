package com.acs.rest;

import com.acs.model.Key;
import com.acs.service.KeyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/key")
public class KeyController {

    @Autowired
    private KeyService keyService;

    @RequestMapping(value = "/list/", method = RequestMethod.GET)
    public List<Key> list() {
        return keyService.getAllKeys();
    }

    @RequestMapping(method = RequestMethod.POST, consumes = {"application/json"})
    public ResponseEntity createKey(@RequestBody Key key) {
        keyService.save(key);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
    public ResponseEntity createKey(@PathVariable(value = "id") Integer id) {
        keyService.findById(id).ifPresent(a -> keyService.delete(a));
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/{id}", consumes = {"application/json"})
    public ResponseEntity updateKey(@PathVariable(value = "id") Integer id, @RequestBody Key key) {
        keyService.findById(id).ifPresent(a -> keyService.delete(a));
        keyService.save(key);
        return new ResponseEntity(HttpStatus.OK);
    }

}
