package com.acs.mobile.service;

import com.acs.mobile.model.User;

import retrofit2.http.GET;

public interface LoginService {

    @GET("/api/login")
    String authenticateUser(User user);

}
