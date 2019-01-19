package com.acs.repository;

import com.acs.model.DoorLock;
import com.acs.model.OfficeRoom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OfficeRoomRepository extends JpaRepository<OfficeRoom, Integer> {

    List<OfficeRoom> findAllByDoorLocks(List<DoorLock> doorLockList);
}
