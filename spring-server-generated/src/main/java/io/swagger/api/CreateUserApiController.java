package io.swagger.api;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.swagger.annotations.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.*;
import javax.validation.Valid;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.List;
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2018-11-19T06:18:30.042Z")

@Controller
public class CreateUserApiController implements CreateUserApi {

    private static final Logger log = LoggerFactory.getLogger(CreateUserApiController.class);

    private final ObjectMapper objectMapper;

    private final HttpServletRequest request;

    @org.springframework.beans.factory.annotation.Autowired
    public CreateUserApiController(ObjectMapper objectMapper, HttpServletRequest request) {
        this.objectMapper = objectMapper;
        this.request = request;
    }

    public ResponseEntity<Void> createNewUser(@NotNull @ApiParam(value = "Employee username", required = true) @Valid @RequestParam(value = "username", required = true) String username,@NotNull @ApiParam(value = "Employee password", required = true) @Valid @RequestParam(value = "password", required = true) String password,@ApiParam(value = "Employee name") @Valid @RequestParam(value = "firstName", required = false) String firstName,@ApiParam(value = "Employee last name") @Valid @RequestParam(value = "lastName", required = false) String lastName,@ApiParam(value = "Employee usergroup, is not required, by default is used User") @Valid @RequestParam(value = "userGroup", required = false) String userGroup) {
        String accept = request.getHeader("Accept");
        return new ResponseEntity<Void>(HttpStatus.NOT_IMPLEMENTED);
    }

}
