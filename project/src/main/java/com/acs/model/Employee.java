package com.acs.model;

import javax.persistence.*;
import java.util.List;


@Entity
@Table(name="acs_employee")
public class Employee extends User{

    @OneToOne(targetEntity = OfficeRoom.class)
    private OfficeRoom workingRoom;

    @OneToMany(targetEntity = Key.class)
    private List<Key> keys;


    public OfficeRoom getWorkingRoom() {
        return workingRoom;
    }

    public void setWorkingRoom(OfficeRoom workingRoom) {
        this.workingRoom = workingRoom;
    }

    public List<Key> getKey() {
        return keys;
    }

    public void setKey(List<Key> keys) {
        this.keys = keys;
    }
}
