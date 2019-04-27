package com.acs.service.impl;


import com.acs.model.Action;
import com.acs.model.DoorLock;
import com.acs.model.OfficeRoom;
import com.acs.repository.DoorLockRepository;
import com.acs.service.DoorLockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DoorLockServiceImpl implements DoorLockService {

    @Autowired
    private DoorLockRepository doorLockRepository;

    @Override
    public List<DoorLock> getAllDoorLocks() {
        return doorLockRepository.findAll();
    }

    @Override
    public void save(DoorLock doorLock) {
        doorLockRepository.save(doorLock);
    }

    @Override
    public Optional<DoorLock> findById(Integer id) {
        return doorLockRepository.findById(id);
    }

    @Override
    public void delete(DoorLock doorLock) {
        doorLockRepository.delete(doorLock);
    }

    @Override
    public Optional<DoorLock> findByName(String name) {
        return doorLockRepository.findByName(name);
    }


    @Override
    public Optional<DoorLock> findByScannerName(String name) {
        return doorLockRepository.findByScanner_Name(name);
    }
}
