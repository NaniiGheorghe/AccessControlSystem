package com.acs.mobile.dto;

import com.google.gson.annotations.SerializedName;

public class AccessDTO {

    @SerializedName("userDTO")
    private UserDTO userDTO;

    @SerializedName("accessibleRoom")
    private String accessibleRoom;

    @SerializedName("accessibleRoomDoorLock")
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
