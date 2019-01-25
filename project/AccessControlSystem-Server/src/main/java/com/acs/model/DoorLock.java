package com.acs.model;

import javax.persistence.*;

@Entity
@Table(name="acs_doorlock")
public class DoorLock {

    @Id
    @Column(name="id")
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
