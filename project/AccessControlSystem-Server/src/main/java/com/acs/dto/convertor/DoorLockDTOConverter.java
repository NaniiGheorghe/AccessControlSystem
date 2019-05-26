package com.acs.dto.convertor;

import com.acs.dto.DoorLockDTO;
import com.acs.dto.OfficeRoom;
import com.acs.model.DoorLock;
import org.springframework.stereotype.Component;

@Component
public class DoorLockDTOConverter {



    public DoorLockDTO convertToDto(DoorLock doorLock) {
        DoorLockDTO doorLockDTO = new DoorLockDTO();
        doorLockDTO.setId(doorLock.getId());
        doorLockDTO.setName(doorLock.getName());
        //doorLockDTO.setScanner(doorLock.getScanner().getId());
        return doorLockDTO;
    }
}
