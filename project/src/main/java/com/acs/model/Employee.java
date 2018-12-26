package com.acs.model;

import javax.persistence.*;
import java.util.List;


@Entity
@Table(name="acs_employee")
public class Employee{

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @OneToOne(targetEntity = User.class)
    private User user;

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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<Key> getKeys() {
        return keys;
    }

    public void setKeys(List<Key> keys) {
        this.keys = keys;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

}
