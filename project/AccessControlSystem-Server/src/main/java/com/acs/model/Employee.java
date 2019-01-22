package com.acs.model;

import javax.persistence.*;
import java.util.List;


@Entity
@Table(name = "acs_employee")
public class Employee {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @OneToOne(targetEntity = ApplicationUser.class)
    private ApplicationUser user;

    private String firsName;

    private String lastName;

    @OneToOne(targetEntity = OfficeRoom.class)
    private OfficeRoom workingRoom;

    @OneToMany(targetEntity = Key.class, fetch = FetchType.EAGER)
    transient private List<Key> keys;


    public OfficeRoom getWorkingRoom() {
        return workingRoom;
    }

    public void setWorkingRoom(OfficeRoom workingRoom) {
        this.workingRoom = workingRoom;
    }

    public ApplicationUser getUser() {
        return user;
    }

    public void setUser(ApplicationUser user) {
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

    public String getFirsName() {
        return firsName;
    }

    public void setFirsName(String firsName) {
        this.firsName = firsName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
}
