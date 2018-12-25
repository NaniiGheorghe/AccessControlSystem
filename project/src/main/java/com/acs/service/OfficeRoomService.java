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
}