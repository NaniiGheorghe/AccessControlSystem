package com.acs.rest;

import com.acs.model.ApplicationUser;
import com.acs.model.UserGroup;
import com.acs.repository.ApplicationUserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.jws.soap.SOAPBinding;

@RestController
@RequestMapping("/users")
public class UserController {

    Logger LOGGER = LoggerFactory.getLogger(this.getClass());
    private ApplicationUserRepository applicationUserRepository;
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public UserController(ApplicationUserRepository applicationUserRepository,
                          BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.applicationUserRepository = applicationUserRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @RequestMapping(value = "/sign-up", method = RequestMethod.POST)
    public ResponseEntity signUp(@RequestBody ApplicationUser user) {
        if (applicationUserRepository.findByUsername(user.getUsername()).isPresent())
            return new ResponseEntity(HttpStatus.CONFLICT);

        if (user.getUsergroup() == null)
            user.setUsergroup(UserGroup.USER);

        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        applicationUserRepository.save(user);

        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(value = "/validateToken", method = RequestMethod.GET)
    public ResponseEntity validateToken() {
        return new ResponseEntity(HttpStatus.OK);
    }

}
