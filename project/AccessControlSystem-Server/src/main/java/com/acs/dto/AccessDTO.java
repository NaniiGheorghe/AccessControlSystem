package com.acs.dto;

public class AccessDTO {

    private UserDTO userDTO;

    private String accessibleRoom;

    private OfficeRoom accessibleRoomDoorLock;

    public UserDTO getUserDTO() {
        return userDTO;
    }

    public void setUserDTO(UserDTO userDTO) {
        this.userDTO = userDTO;
    }

    public String getAccessibleRoom() {
        return accessibleRoom;
    }

    public void setAccessibleRoom(String accessibleRoom) {
        this.accessibleRoom = accessibleRoom;
    }

    public OfficeRoom getAccessibleRoomDoorLock() {
        return accessibleRoomDoorLock;
    }

    public void setAccessibleRoomDoorLock(OfficeRoom accessibleRoomDoorLock) {
        this.accessibleRoomDoorLock = accessibleRoomDoorLock;
    }
}
