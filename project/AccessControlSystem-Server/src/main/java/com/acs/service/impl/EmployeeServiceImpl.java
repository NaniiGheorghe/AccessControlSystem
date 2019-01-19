package com.acs.service.impl;

import com.acs.model.Employee;
import com.acs.model.Notification;
import com.acs.model.OfficeRoom;
import com.acs.model.RequestAccessNotification;
import com.acs.repository.EmployeeRepository;
import com.acs.repository.NotificationRepository;
import com.acs.service.DoorLockService;
import com.acs.service.EmployeeService;
import com.acs.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private NotificationService notificationService;


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

    @Override
    public void requestAccess(Employee emp, Optional<OfficeRoom> officeRoom) {
        officeRoom.ifPresent(o -> notificationService.create(new RequestAccessNotification(emp, o)));
    }

    @Override
    public void giveAccess(Employee emp, Optional<OfficeRoom> officeRoom) {
        officeRoom.ifPresent(o -> emp.getKeys().forEach(k -> k.getAccessibleDoorLocks().addAll(o.getDoorLocks())));
    }
}
