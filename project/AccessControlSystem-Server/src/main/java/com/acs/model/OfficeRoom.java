package com.acs.model;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "acs_officeroom")
public class OfficeRoom {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    @OneToMany(targetEntity = DoorLock.class, fetch = FetchType.LAZY)
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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
