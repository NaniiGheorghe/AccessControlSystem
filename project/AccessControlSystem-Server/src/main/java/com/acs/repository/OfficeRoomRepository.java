package com.acs.repository;

import com.acs.model.DoorLock;
import com.acs.model.OfficeRoom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OfficeRoomRepository extends JpaRepository<OfficeRoom, Integer> {
    
    List<OfficeRoom> findByDoorLocks(List<DoorLock> doorLockList);

    Optional<OfficeRoom> findByName(String roomName);

}
