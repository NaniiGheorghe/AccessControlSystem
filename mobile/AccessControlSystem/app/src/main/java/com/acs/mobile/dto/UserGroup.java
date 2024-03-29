package com.acs.mobile.dto;


public enum UserGroup {

    USER(1), ADMINISTRATOR(2);

    private final int value;

    private UserGroup(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }
}

