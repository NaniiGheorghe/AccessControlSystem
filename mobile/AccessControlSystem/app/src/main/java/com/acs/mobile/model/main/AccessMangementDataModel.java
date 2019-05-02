package com.acs.mobile.model.main;

public class AccessMangementDataModel {

    private String fullName;

    private String position;

    private String department;

    private String defaultRoom;

    private String room;

    private String doorId;

    public AccessMangementDataModel(String fullName, String position, String department, String defaultRoom, String room, String doorId) {
        this.fullName = fullName;
        this.position = "Position: " + position;
        this.department = "Department:" + department;
        this.defaultRoom = "Default room: " + defaultRoom;
        this.room = "Acces:" + room;
        this.doorId = doorId;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getDefaultRoom() {
        return defaultRoom;
    }

    public void setDefaultRoom(String defaultRoom) {
        this.defaultRoom = defaultRoom;
    }

    public String getRoom() {
        return room;
    }

    public void setRoom(String room) {
        this.room = room;
    }

    public String getDoorId() {
        return doorId;
    }

    public void setDoorId(String doorId) {
        doorId = doorId;
    }
}

