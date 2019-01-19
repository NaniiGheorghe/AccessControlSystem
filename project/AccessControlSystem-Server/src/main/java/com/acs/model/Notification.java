package com.acs.model;

import javax.persistence.*;

@Entity
@Table(name="acs_notification")
public class Notification {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Notification() {
    }
}
