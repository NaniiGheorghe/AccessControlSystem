package io.swagger.api;

import io.swagger.model.OfficeRoom;
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
public class AccesibleRoomsApiController implements AccesibleRoomsApi {

    private static final Logger log = LoggerFactory.getLogger(AccesibleRoomsApiController.class);

    private final ObjectMapper objectMapper;

    private final HttpServletRequest request;

    @org.springframework.beans.factory.annotation.Autowired
    public AccesibleRoomsApiController(ObjectMapper objectMapper, HttpServletRequest request) {
        this.objectMapper = objectMapper;
        this.request = request;
    }

    public ResponseEntity<List<OfficeRoom>> getDoorLocks(@NotNull @ApiParam(value = "Username provided for loging", required = true) @Valid @RequestParam(value = "username", required = true) String username) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<List<OfficeRoom>>(objectMapper.readValue("[ {  \"doorLocks\" : {    \"name\" : \"Meeting Room Door Lock 1\",    \"id\" : \"s552ss1ee-6c54-4b01-90e6-d701748f0851\"  },  \"name\" : \"Meeting room\",  \"id\" : \"s5521essadwe-6c54-4b01-90e6-d701748f0851\"}, {  \"doorLocks\" : {    \"name\" : \"Meeting Room Door Lock 1\",    \"id\" : \"s552ss1ee-6c54-4b01-90e6-d701748f0851\"  },  \"name\" : \"Meeting room\",  \"id\" : \"s5521essadwe-6c54-4b01-90e6-d701748f0851\"} ]", List.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<List<OfficeRoom>>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<List<OfficeRoom>>(HttpStatus.NOT_IMPLEMENTED);
    }

}
