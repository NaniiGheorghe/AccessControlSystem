package com.acs.service.impl;

import com.acs.model.Employee;
import com.acs.model.OfficeRoom;
import com.acs.model.RequestAccessNotification;
import com.acs.repository.EmployeeRepository;
import com.acs.service.DoorLockService;
import com.acs.service.EmployeeService;
import com.acs.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private NotificationService notificationService;

    @Autowired
    private DoorLockService doorLockService;


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

    @Override
    @Transactional
    public void giveAccess(Integer empId, Integer doorLockId) {
        employeeRepository.findById(empId).ifPresent(
                employee -> {
                    employee.getKeys().forEach(
                            key -> {
                                doorLockService.findById(doorLockId).ifPresent(
                                        doorLock -> {
                                            key.getAccessibleDoorLocks().add(doorLock);
                                        }
                                );
                            }
                    );
                }
        );
    }

    @Override
    @Transactional
    public void removeAccess(Integer empId, Integer doorLockId) {
        employeeRepository.findById(empId).ifPresent(
                employee -> {
                    employee.getKeys().forEach(
                            key -> {
                                doorLockService.findById(doorLockId).ifPresent(
                                        doorLock -> {
                                            key.getAccessibleDoorLocks().removeIf(
                                                    doorLock1 -> {
                                                        return doorLock1.equals(doorLock);
                                                    });
                                        }
                                );
                            }
                    );
                }
        );
    }

    @Override
    public Optional<Employee> findByUsername(String username) {
        return employeeRepository.findByUser_Username(username);
    }
}
