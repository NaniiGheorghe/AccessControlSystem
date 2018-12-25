package com.acs.model;

import javax.persistence.*;

@MappedSuperclass
public class User {

    @Id
    @Column(name="id")
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;

    private String firsName;

    private String lastName;

    private String username;

    private String password;

    @ManyToOne(targetEntity = UserGroup.class)
    private UserGroup usergroup;


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

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public UserGroup getUsergroup() {
        return usergroup;
    }

    public void setUsergroup(UserGroup usergroup) {
        this.usergroup = usergroup;
    }
}