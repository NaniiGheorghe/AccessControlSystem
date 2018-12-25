package com.acs.service.impl;

import com.acs.model.Employee;
import com.acs.repository.EmployeeRepository;
import com.acs.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @Override
    public void save(Employee employee) {
        employeeRepository.save(employee);
    }

    @Override
    public Optional<Employee> findById(Integer id) {
        return employeeRepository.findById(id);
    }

    @Override
    public void delete(Employee employee) {
        employeeRepository.delete(employee);
    }
}
