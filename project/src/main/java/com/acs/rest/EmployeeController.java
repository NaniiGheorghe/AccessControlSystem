package com.acs.rest;

import com.acs.model.Employee;
import com.acs.service.EmployeeService;
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

    @RequestMapping(value = "/list/", method = RequestMethod.GET)
    public List<Employee> list() {
        return employeeService.getAllEmployees();
    }

    @RequestMapping(method = RequestMethod.POST, consumes = {"application/json"})
    public ResponseEntity createAction(@RequestBody Employee employee) {
        employeeService.save(employee);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
    public ResponseEntity createAction(@PathVariable(value = "id") Integer id) {
        employeeService.findById(id).ifPresent(a -> employeeService.delete(a));
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/{id}", consumes = {"application/json"})
    public ResponseEntity updateAction(@PathVariable(value = "id") Integer id, @RequestBody Employee employee) {
        employeeService.findById(id).ifPresent(a -> employeeService.delete(a));
        employeeService.save(employee);
        return new ResponseEntity(HttpStatus.OK);
    }


}
