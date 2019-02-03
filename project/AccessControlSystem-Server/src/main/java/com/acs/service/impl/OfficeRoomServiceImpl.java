package com.acs.service.impl;

import com.acs.model.DoorLock;
import com.acs.model.OfficeRoom;
import com.acs.repository.OfficeRoomRepository;
import com.acs.rest.OfficeRoomController;
import com.acs.service.DoorLockService;
import com.acs.service.EmployeeService;
import com.acs.service.OfficeRoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class OfficeRoomServiceImpl implements OfficeRoomService {

    @Autowired
    private OfficeRoomRepository officeRoomRepository;

    @Autowired
    private EmployeeService employeeService;

    @Autowired
    private DoorLockService doorLockService;

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
    @Transactional
    public List<OfficeRoom> findAccessibleByEmployeeId(Integer employee_id) {
        List<DoorLock> doorLockList = new ArrayList<>();
        employeeService.findById(employee_id).ifPresent(
                employee -> employee.getKeys().forEach(
                        key -> doorLockList.addAll(key.getAccessibleDoorLocks())
                )
        );
        return officeRoomRepository.findByDoorLocks(doorLockList);
    }

    @Override
    @Transactional
    public List<OfficeRoom> findInaccessibleByEmployeeId(Integer employee_id) {
        List<DoorLock> doorLockList = new ArrayList<>();
        employeeService.findById(employee_id).ifPresent(
                employee -> employee.getKeys().forEach(
                        key -> doorLockList.addAll(key.getAccessibleDoorLocks())
                )
        );
        List<DoorLock> alldoorLocks = doorLockService.getAllDoorLocks();
        alldoorLocks.removeIf(doorLockList::contains);
        List<OfficeRoom> rooms = officeRoomRepository.findAll();
        rooms.removeIf(o -> o.getDoorLocks().isEmpty());

        rooms.removeIf(
                officeRoom -> {
                    return !alldoorLocks.stream().anyMatch(
                            doorLock -> {
                                return officeRoom.getDoorLocks().contains(doorLock);
                            }
                    );
                }
        );

        return rooms;
    }

    @Override
    public Optional<OfficeRoom> findByDoorLock(Integer doorLock_id) {
        List<DoorLock> doorLockList = new ArrayList<>();
        doorLockService.findById(doorLock_id).ifPresent(
                doorLockList::add
        );
        List<OfficeRoom> rooms = officeRoomRepository.findByDoorLocks(doorLockList);
        if (!rooms.isEmpty()) {
            return Optional.ofNullable(rooms.get(0));
        } else {
            return Optional.empty();
        }
    }
}
