package com.acs.dto.convertor;

import com.acs.dto.AccessDTO;
import com.acs.model.DoorLock;
import com.acs.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class AccessDTOConverter {

    @Autowired
    private UserDTOConverter userDTOConverter;

    @Autowired
    private DoorLockDTOConverter doorLockDTOConverter;

    public AccessDTO convertToDTO(Employee employee, String accessibleRoom, DoorLock accessibleDoorLock) {
        AccessDTO accessDTO = new AccessDTO();
        accessDTO.setUserDTO(userDTOConverter.convertToDto(employee));
        accessDTO.setAccessibleRoom(accessibleRoom);
        accessDTO.setAccessibleRoomDoorLock(doorLockDTOConverter.convertToDto(accessibleDoorLock));
        return accessDTO;
    }


}

