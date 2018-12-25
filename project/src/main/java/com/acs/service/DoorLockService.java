package com.acs.service;

import com.acs.model.Action;
import com.acs.model.DoorLock;

import java.util.List;
import java.util.Optional;

public interface DoorLockService {

    List<DoorLock> getAllDoorLocks();

    void save(DoorLock action);

    Optional<DoorLock> findById(Integer id);

    void delete(DoorLock doorLock);
}
