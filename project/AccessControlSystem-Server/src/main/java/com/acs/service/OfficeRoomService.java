package com.acs.service;

import com.acs.model.OfficeRoom;
import com.acs.rest.OfficeRoomController;

import java.util.List;
import java.util.Optional;

public interface OfficeRoomService {
    List<OfficeRoom> getAllOfficeRooms();

    void save(OfficeRoom officeRoom);

    Optional<OfficeRoom> findById(Integer id);

    void delete(OfficeRoom officeRoom);

    List<OfficeRoom> findAccessibleByEmployeeId(Integer employee_id);

    List<OfficeRoom> findInaccessibleByEmployeeId(Integer employee_id);

    Optional<OfficeRoom> findByDoorLock(Integer doorLock_id);

    void createaRoom(String roomName, String doorName);

    boolean isValiCombination(String roomName, String doorName);

    Optional<OfficeRoom> findByName(String roomName);

}
