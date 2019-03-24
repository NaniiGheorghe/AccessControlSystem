package com.acs.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

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

    @OneToOne(targetEntity = OfficeRoom.class, fetch = FetchType.LAZY)
    private OfficeRoom workingRoom;

    @OneToMany(targetEntity = Key.class, fetch = FetchType.LAZY)
    private List<Key> keys;

    private String positions;

    private String departament;

    private String image;

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

    public String getPositions() {
        return positions;
    }

    public void setPositions(String positions) {
        this.positions = positions;
    }

    public String getDepartament() {
        return departament;
    }

    public void setDepartament(String departament) {
        this.departament = departament;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
