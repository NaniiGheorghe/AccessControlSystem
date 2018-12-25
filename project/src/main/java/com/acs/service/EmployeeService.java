package com.acs.service;

import com.acs.model.Employee;

import java.util.List;
import java.util.Optional;

public interface EmployeeService {
    List<Employee> getAllEmployees();

    void save(Employee employee);

    Optional<Employee> findById(Integer id);

    void delete(Employee employee);
}
