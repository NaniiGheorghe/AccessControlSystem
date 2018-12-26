package com.acs.service;

import com.acs.model.Employee;
import com.acs.model.OfficeRoom;

import java.util.List;
import java.util.Optional;

public interface EmployeeService {
    List<Employee> getAllEmployees();

    void save(Employee employee);

    Optional<Employee> findById(Integer id);

    void delete(Employee employee);

    void requestAccess(Employee emp, Optional<OfficeRoom> officeRoom);

    void giveAccess(Employee emp, Optional<OfficeRoom> officeRoom);

}
