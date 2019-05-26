package com.acs.dto.convertor;

import com.acs.dto.OfficeRoom;
import com.acs.model.DoorLock;
import org.springframework.stereotype.Component;

@Component
public class OfficeRoomDTOConverter {

    public OfficeRoom convertToDto(DoorLock doorLock) {
        OfficeRoom officeRoom = new OfficeRoom();
        officeRoom.setId(doorLock.getId());
        officeRoom.setName(doorLock.getName());
        return officeRoom;
    }


}
