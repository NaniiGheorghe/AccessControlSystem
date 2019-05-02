/**
 * NOTE: This class is auto generated by the swagger code generator program (2.3.1).
 * https://github.com/swagger-api/swagger-codegen
 * Do not edit the class manually.
 */
package io.swagger.api;

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

@Api(value = "delete_user", description = "the delete_user API")
public interface DeleteUserApi {

    @ApiOperation(value = "Delete User", nickname = "deleteUser", notes = "Delete new User", tags={ "Administrator", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "Deleted successfully"),
        @ApiResponse(code = 400, message = "Bad input"),
        @ApiResponse(code = 401, message = "Wrong user credentials"),
        @ApiResponse(code = 404, message = "Provided username was not found") })
    @RequestMapping(value = "/delete_user",
        consumes = { "application/json" },
        method = RequestMethod.DELETE)
    ResponseEntity<Void> deleteUser(@NotNull @ApiParam(value = "Employee name", required = true) @Valid @RequestParam(value = "username", required = true) String username);

}