package io.swagger.api;

import io.swagger.model.User;
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
public class GetUserApiController implements GetUserApi {

    private static final Logger log = LoggerFactory.getLogger(GetUserApiController.class);

    private final ObjectMapper objectMapper;

    private final HttpServletRequest request;

    @org.springframework.beans.factory.annotation.Autowired
    public GetUserApiController(ObjectMapper objectMapper, HttpServletRequest request) {
        this.objectMapper = objectMapper;
        this.request = request;
    }

    public ResponseEntity<List<User>> getUser(@ApiParam(value = "Employee name") @Valid @RequestParam(value = "username", required = false) String username) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<List<User>>(objectMapper.readValue("[ {  \"firstName\" : \"Gicu\",  \"lastName\" : \"Nanii\",  \"password\" : \"passexample\",  \"id\" : \"d290f1ee-6c54-4b01-90e6-d701748f0851\",  \"userGroup\" : {    \"name\" : \"ADMINISTRATOR\",    \"description\" : \"Intended to be used by administrators\",    \"id\" : \"s5521ee-6c54-4b01-90e6-d701748f0851\"  },  \"username\" : \"gnanii\"}, {  \"firstName\" : \"Gicu\",  \"lastName\" : \"Nanii\",  \"password\" : \"passexample\",  \"id\" : \"d290f1ee-6c54-4b01-90e6-d701748f0851\",  \"userGroup\" : {    \"name\" : \"ADMINISTRATOR\",    \"description\" : \"Intended to be used by administrators\",    \"id\" : \"s5521ee-6c54-4b01-90e6-d701748f0851\"  },  \"username\" : \"gnanii\"} ]", List.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<List<User>>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<List<User>>(HttpStatus.NOT_IMPLEMENTED);
    }

}
