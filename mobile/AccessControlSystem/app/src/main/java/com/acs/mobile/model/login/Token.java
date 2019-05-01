package com.acs.mobile.model.login;

import com.google.gson.annotations.SerializedName;

public class Token {

    @SerializedName("token")
    private String value;

    public Token(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}
