package com.acs.mobile.dto;

import com.google.gson.annotations.SerializedName;

import java.util.List;

public class UserDTO {

    @SerializedName("id")
    private int id;

    @SerializedName("username")
    private String username;

    @SerializedName("password")
    private String password;

    @SerializedName("usergroup")
    private UserGroup usergroup;

    @SerializedName("firstName")
    private String firstName;

    @SerializedName("lastName")
    private String lastName;

    @SerializedName("defaultWorkingRoom")
    private String defaultWorkingRoom;

    @SerializedName("keys")
    private List<KeyDTO> keys;

    @SerializedName("keyType")
    private Integer keyType;

    @SerializedName("position")
    private String position;

    @SerializedName("departament")
    private String departament;

    @SerializedName("image")
    private String image;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getDefaultWorkingRoom() {
        return defaultWorkingRoom;
    }

    public void setDefaultWorkingRoom(String defaultWorkingRoom) {
        this.defaultWorkingRoom = defaultWorkingRoom;
    }

    public List<KeyDTO> getKeys() {
        return keys;
    }

    public void setKeys(List<KeyDTO> keys) {
        this.keys = keys;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getDepartament() {
        return departament;
    }

    public void setDepartament(String departament) {
        this.departament = departament;
    }

    public Integer getKeyType() {
        return keyType;
    }

    public void setKeyType(Integer keyType) {
        this.keyType = keyType;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

}
