package com.acs.model.dto;

import com.acs.model.Direction;

import java.util.List;

public class ActionDTO {

    private int id;

    private String employee;

    private Direction direction;

    private String gendate;

    private String officeRoom;

    private List<Integer> doorLock;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmployee() {
        return employee;
    }

    public void setEmployee(String employee) {
        this.employee = employee;
    }

    public Direction getDirection() {
        return direction;
    }

    public void setDirection(Direction direction) {
        this.direction = direction;
    }

    public String getGendate() {
        return gendate;
    }

    public void setGendate(String gendate) {
        this.gendate = gendate;
    }

    public String getOfficeRoom() {
        return officeRoom;
    }

    public void setOfficeRoom(String officeRoom) {
        this.officeRoom = officeRoom;
    }

    public List<Integer> getDoorLock() {
        return doorLock;
    }

    public void setDoorLock(List<Integer> doorLock) {
        this.doorLock = doorLock;
    }
}
