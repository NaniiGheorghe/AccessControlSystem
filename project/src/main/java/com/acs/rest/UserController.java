package com.acs.rest;

import com.acs.model.OfficeRoom;
import com.acs.model.User;
import com.acs.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/user")
public class UserController {

    Logger LOGGER = LoggerFactory.getLogger(this.getClass());


    @Autowired
    private UserService userService;

    @RequestMapping(value = "/list/", method = RequestMethod.GET)
    public List<User> list() {
        return userService.getAllUsers();
    }


    @RequestMapping(method = RequestMethod.POST, consumes = {"application/json"})
    public ResponseEntity createOfficeRoom(@RequestBody User user) {
        userService.save(user);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @GetMapping("/login")
    public String login() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (!(auth instanceof AnonymousAuthenticationToken)) {
            LOGGER.info("User was logged in.");
        }
        return null;
    }
}
