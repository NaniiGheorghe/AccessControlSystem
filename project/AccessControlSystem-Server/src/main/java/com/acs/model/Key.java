package com.acs.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="acs_key")
public class Key {

    @Id
    @Column(name="id")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;

    @ManyToMany(targetEntity = Employee.class)
    private List<DoorLock> accessibleDoorLocks;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public List<DoorLock> getAccessibleDoorLocks() {
        return accessibleDoorLocks;
    }

    public void setAccessibleDoorLocks(List<DoorLock> accessibleDoorLocks) {
        this.accessibleDoorLocks = accessibleDoorLocks;
    }
}
