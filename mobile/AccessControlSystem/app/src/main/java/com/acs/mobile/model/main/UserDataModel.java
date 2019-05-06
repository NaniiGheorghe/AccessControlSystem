package com.acs.mobile.model.main;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.util.Base64;

import com.acs.mobile.dto.UserDTO;

public class UserDataModel implements DataModel {

    private String firstName;

    private String lastName;

    private String defaultWorkingRoom;

    private String position;

    private String departament;

    private String image;

    public UserDataModel(String firstName, String lastName, String defaultWorkingRoom, String position, String departament, String image) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.defaultWorkingRoom = defaultWorkingRoom;
        this.position = position;
        this.departament = departament;
        this.image = image;
    }

    public UserDataModel(UserDTO userDTO) {
        this.firstName = "First Name: " +  userDTO.getFirstName();
        this.lastName = "Last Name: " + userDTO.getLastName();
        this.defaultWorkingRoom = "Default working room: " +userDTO.getDefaultWorkingRoom();
        this.position = "Position: " +userDTO.getPosition();
        this.departament = "Department: " + userDTO.getDepartament();
        this.image = userDTO.getImage();
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

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
