/**
 * NOTE: This class is auto generated by the swagger code generator program (2.3.1).
 * https://github.com/swagger-api/swagger-codegen
 * Do not edit the class manually.
 */
package io.swagger.api;

import io.swagger.model.User;
import io.swagger.annotations.*;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import javax.validation.constraints.*;
import java.util.List;
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2018-11-19T06:18:30.042Z")

@Api(value = "get_user", description = "the get_user API")
public interface GetUserApi {

    @ApiOperation(value = "Get User", nickname = "getUser", notes = "Get User", response = User.class, responseContainer = "List", tags={ "Administrator", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "Get all users based on query", response = User.class, responseContainer = "List"),
        @ApiResponse(code = 400, message = "Bad input"),
        @ApiResponse(code = 401, message = "Wrong user credentials"),
        @ApiResponse(code = 404, message = "Provided user was not found") })
    @RequestMapping(value = "/get_user",
        produces = { "application/json" }, 
        consumes = { "application/json" },
        method = RequestMethod.GET)
    ResponseEntity<List<User>> getUser(@ApiParam(value = "Employee name") @Valid @RequestParam(value = "username", required = false) String username);

}
