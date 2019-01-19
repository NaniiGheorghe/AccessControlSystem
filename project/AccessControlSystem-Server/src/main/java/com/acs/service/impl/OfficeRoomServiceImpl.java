package com.acs.service.impl;

import com.acs.model.DoorLock;
import com.acs.model.OfficeRoom;
import com.acs.repository.OfficeRoomRepository;
import com.acs.rest.OfficeRoomController;
import com.acs.service.EmployeeService;
import com.acs.service.OfficeRoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class OfficeRoomServiceImpl implements OfficeRoomService {

    @Autowired
    private OfficeRoomRepository officeRoomRepository;
    @Autowired
    private EmployeeService employeeService;

    @Override
    public List<OfficeRoom> getAllOfficeRooms() {
        return officeRoomRepository.findAll();
    }

    @Override
    public void save(OfficeRoom officeRoom) {
        officeRoomRepository.save(officeRoom);
    }

    @Override
    public Optional<OfficeRoom> findById(Integer id) {
        return officeRoomRepository.findById(id);
    }

    @Override
    public void delete(OfficeRoom officeRoom) {
        officeRoomRepository.delete(officeRoom);
    }

    @Override
    public List<OfficeRoom> findByEmployeeId(Integer employee_id) {
        List<DoorLock> doorLockList = new ArrayList<>();
        employeeService.findById(employee_id).ifPresent(
                employee -> employee.getKeys().forEach(
                        key -> doorLockList.addAll(key.getAccessibleDoorLocks())
                )
        );
        return officeRoomRepository.findAllByDoorLocks(doorLockList);
    }
}
