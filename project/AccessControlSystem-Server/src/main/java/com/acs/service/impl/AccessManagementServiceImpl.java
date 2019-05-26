package com.acs.service.impl;

import com.acs.model.DoorLock;
import com.acs.model.Key;
import com.acs.model.Scanner;
import com.acs.service.AccessManagementService;
import com.acs.service.DoorLockService;
import com.acs.service.KeyService;
import com.acs.service.ScannerService;
import io.swagger.models.auth.In;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
public class AccessManagementServiceImpl implements AccessManagementService {

    @Autowired
    private KeyService keyService;
    @Autowired
    private ScannerService scannerService;
    @Autowired
    private DoorLockService doorLockService;


    @Override
    @Transactional
    public boolean checkAccess(String scannerId, String keyId, String scannerType) {
        Optional<Key> key = keyService.findByValue(keyId);
        Optional<Scanner> scanner = scannerService.findByScannerName(scannerId);
        if (key.isPresent() && scanner.isPresent()) {
            Optional<DoorLock> doorLock = doorLockService.findByScannerName(scanner.get().getName());
            if (doorLock.isPresent()) {
                if (key.get().getAccessibleDoorLocks().contains(doorLock.get())) {
                    System.out.println("User has aceess");
                }
                return key.get().getAccessibleDoorLocks().contains(doorLock.get());
            }
        }
        System.out.println("User do not have aceess");
        return false;
    }

}
