package com.acs.dto;

import java.util.List;

public class RoomDTO {

    private int id;

    private String name;

    private List<OfficeRoom> doorLocks;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<OfficeRoom> getDoorLocks() {
        return doorLocks;
    }

    public void setDoorLocks(List<OfficeRoom> doorLocks) {
        this.doorLocks = doorLocks;
    }
}
