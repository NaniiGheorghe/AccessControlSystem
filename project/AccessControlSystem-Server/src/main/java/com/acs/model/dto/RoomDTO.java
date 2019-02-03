package com.acs.model.dto;

import java.util.List;

public class RoomDTO {

    private int id;

    private String name;

    private List<DoorDTO> doorLocks;

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

    public List<DoorDTO> getDoorLocks() {
        return doorLocks;
    }

    public void setDoorLocks(List<DoorDTO> doorLocks) {
        this.doorLocks = doorLocks;
    }
}
