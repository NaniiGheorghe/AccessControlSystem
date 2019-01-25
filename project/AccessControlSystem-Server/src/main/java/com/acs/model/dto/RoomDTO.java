package com.acs.model.dto;

import java.util.List;

public class RoomDTO {

    private int id;

    private String name;

    private List<Integer> doorLocks;

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

    public List<Integer> getDoorLocks() {
        return doorLocks;
    }

    public void setDoorLocks(List<Integer> doorLocks) {
        this.doorLocks = doorLocks;
    }
}
