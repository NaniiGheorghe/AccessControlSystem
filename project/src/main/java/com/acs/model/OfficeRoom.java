package com.acs.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="acs_officeroom")
public class OfficeRoom {

    @Id
    @Column(name="id")
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;

    private String name;

    @OneToMany(targetEntity = DoorLock.class)
    private List<DoorLock> doorLocks;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public List<DoorLock> getDoorLocks() {
        return doorLocks;
    }

    public void setDoorLocks(List<DoorLock> doorLocks) {
        this.doorLocks = doorLocks;
    }

}
