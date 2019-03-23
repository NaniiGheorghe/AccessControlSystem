package com.acs.dto;

import com.acs.model.ApplicationUser;
import com.acs.model.Key;
import com.acs.model.OfficeRoom;
import com.acs.model.UserGroup;

import javax.persistence.*;
import java.util.List;

public class ReportDTO {

    private int id;

    private String employeeName;

    private UserGroup usergroup;

    private OfficeRoom workingRoom;

    private String position;

    private String departament;

    private String month;

    private double workedHours;

    private int moves;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmployeeName() {
        return employeeName;
    }

    public void setEmployeeName(String employeeName) {
        this.employeeName = employeeName;
    }

    public UserGroup getUsergroup() {
        return usergroup;
    }

    public void setUsergroup(UserGroup usergroup) {
        this.usergroup = usergroup;
    }

    public OfficeRoom getWorkingRoom() {
        return workingRoom;
    }

    public void setWorkingRoom(OfficeRoom workingRoom) {
        this.workingRoom = workingRoom;
    }

    public String getDepartament() {
        return departament;
    }

    public void setDepartament(String departament) {
        this.departament = departament;
    }

    public String getMonth() {
        return month;
    }

    public void setMonth(String month) {
        this.month = month;
    }

    public double getWorkedHours() {
        return workedHours;
    }

    public void setWorkedHours(double workedHours) {
        this.workedHours = workedHours;
    }

    public int getMoves() {
        return moves;
    }

    public void setMoves(int moves) {
        this.moves = moves;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }
}
