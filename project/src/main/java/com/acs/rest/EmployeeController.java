package com.acs.rest;

import com.acs.model.Employee;
import com.acs.service.EmployeeService;
import com.acs.service.OfficeRoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/employee")
public class EmployeeController {


    @Autowired
    private EmployeeService employeeService;

    @Autowired
    private OfficeRoomService officeRoomService;

    @RequestMapping(value = "/list/", method = RequestMethod.GET)
    public List<Employee> list() {
        return employeeService.getAllEmployees();
    }

    @RequestMapping(method = RequestMethod.POST, consumes = {"application/json"})
    public ResponseEntity createEmployee(@RequestBody Employee employee) {
        employeeService.save(employee);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
    public ResponseEntity createEmployee(@PathVariable(value = "id") Integer id) {
        employeeService.findById(id).ifPresent(a -> employeeService.delete(a));
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/{id}", consumes = {"application/json"})
    public ResponseEntity updateEmployee(@PathVariable(value = "id") Integer id, @RequestBody Employee employee) {
        employeeService.findById(id).ifPresent(a -> employeeService.delete(a));
        employeeService.save(employee);
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/request_access/{employee_id}/{room_id}")
    public ResponseEntity requestAccess(@PathVariable(value = "employee_id") Integer employee_id,
                                        @PathVariable(value = "room_id") Integer room_id) {
        employeeService.findById(employee_id).ifPresent(e ->
                employeeService.requestAccess(e, officeRoomService.findById(room_id))
        );
        return new ResponseEntity(HttpStatus.OK);
    }


    @RequestMapping(method = RequestMethod.POST, value = "/give_access/{employee_id}/{room_id}")
    public ResponseEntity giveAccess(@PathVariable(value = "employee_id") Integer employee_id,
                                     @PathVariable(value = "room_id") Integer room_id) {
        employeeService.findById(employee_id).ifPresent(e ->
                employeeService.requestAccess(e, officeRoomService.findById(room_id))
        );
        return new ResponseEntity(HttpStatus.OK);
    }

}
