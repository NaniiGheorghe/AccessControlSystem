package io.swagger.api;

import io.swagger.model.Action;
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
public class ActionsApiController implements ActionsApi {

    private static final Logger log = LoggerFactory.getLogger(ActionsApiController.class);

    private final ObjectMapper objectMapper;

    private final HttpServletRequest request;

    @org.springframework.beans.factory.annotation.Autowired
    public ActionsApiController(ObjectMapper objectMapper, HttpServletRequest request) {
        this.objectMapper = objectMapper;
        this.request = request;
    }

    public ResponseEntity<List<Action>> getActions(@ApiParam(value = "Pass the room ID which will be used in the query") @Valid @RequestParam(value = "roomId", required = false) String roomId,@ApiParam(value = "Pass the employee ID which will be used in the query") @Valid @RequestParam(value = "employeeId", required = false) String employeeId,@ApiParam(value = "Pass the period which will be used in the query") @Valid @RequestParam(value = "period", required = false) String period) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<List<Action>>(objectMapper.readValue("[ {  \"doorLock\" : {    \"name\" : \"Meeting Room Door Lock 1\",    \"id\" : \"s552ss1ee-6c54-4b01-90e6-d701748f0851\"  },  \"gendate\" : \"2016-08-29T09:12:33.001Z\",  \"id\" : \"s552ss1asdee-6c54-4b01-90e6-asdg4sedsf\",  \"employee\" : {    \"workingRoom\" : {      \"doorLocks\" : {        \"name\" : \"Meeting Room Door Lock 1\",        \"id\" : \"s552ss1ee-6c54-4b01-90e6-d701748f0851\"      },      \"name\" : \"Meeting room\",      \"id\" : \"s5521essadwe-6c54-4b01-90e6-d701748f0851\"    },    \"key\" : {      \"accessibleDoorLocks\" : {        \"name\" : \"Meeting Room Door Lock 1\",        \"id\" : \"s552ss1ee-6c54-4b01-90e6-d701748f0851\"      },      \"id\" : \"s5521ee-6c5asdas4-4b01-90e6-d701748f0851\"    }  },  \"direction\" : {    \"direction\" : \"IN\"  }}, {  \"doorLock\" : {    \"name\" : \"Meeting Room Door Lock 1\",    \"id\" : \"s552ss1ee-6c54-4b01-90e6-d701748f0851\"  },  \"gendate\" : \"2016-08-29T09:12:33.001Z\",  \"id\" : \"s552ss1asdee-6c54-4b01-90e6-asdg4sedsf\",  \"employee\" : {    \"workingRoom\" : {      \"doorLocks\" : {        \"name\" : \"Meeting Room Door Lock 1\",        \"id\" : \"s552ss1ee-6c54-4b01-90e6-d701748f0851\"      },      \"name\" : \"Meeting room\",      \"id\" : \"s5521essadwe-6c54-4b01-90e6-d701748f0851\"    },    \"key\" : {      \"accessibleDoorLocks\" : {        \"name\" : \"Meeting Room Door Lock 1\",        \"id\" : \"s552ss1ee-6c54-4b01-90e6-d701748f0851\"      },      \"id\" : \"s5521ee-6c5asdas4-4b01-90e6-d701748f0851\"    }  },  \"direction\" : {    \"direction\" : \"IN\"  }} ]", List.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<List<Action>>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<List<Action>>(HttpStatus.NOT_IMPLEMENTED);
    }

}
