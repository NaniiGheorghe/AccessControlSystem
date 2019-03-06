package com.acs.model.dto;

import com.acs.model.UserGroup;

import java.util.List;

public class UserDTO {

    private int id;

    private String username;

    private String password;

    private UserGroup usergroup;

    private String firstName;

    private String lastName;

    private String defaultWorkingRoom;

    private List<Integer> keys;

    private String position;

    private String departament;

    private String accessibleRoom;

    private DoorDTO accessibleRoomDoorLock;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public UserGroup getUsergroup() {
        return usergroup;
    }

    public void setUsergroup(UserGroup usergroup) {
        this.usergroup = usergroup;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getDefaultWorkingRoom() {
        return defaultWorkingRoom;
    }

    public void setDefaultWorkingRoom(String defaultWorkingRoom) {
        this.defaultWorkingRoom = defaultWorkingRoom;
    }

    public List<Integer> getKeys() {
        return keys;
    }

    public void setKeys(List<Integer> keys) {
        this.keys = keys;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getDepartament() {
        return departament;
    }

    public void setDepartament(String departament) {
        this.departament = departament;
    }

    public String getAccessibleRoom() {
        return accessibleRoom;
    }

    public void setAccessibleRoom(String accessibleRoom) {
        this.accessibleRoom = accessibleRoom;
    }

    public DoorDTO getAccessibleRoomDoorLock() {
        return accessibleRoomDoorLock;
    }

    public void setAccessibleRoomDoorLock(DoorDTO accessibleRoomDoorLock) {
        this.accessibleRoomDoorLock = accessibleRoomDoorLock;
    }
}

