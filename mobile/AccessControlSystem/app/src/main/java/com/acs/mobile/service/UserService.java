package com.acs.mobile.service;

import com.acs.mobile.dto.UserDTO;

import java.util.List;

import io.reactivex.Single;

import retrofit2.http.GET;
import retrofit2.http.Header;

public interface UserService {

    @GET("/administrator/api/v1/employee/list/")
    Single<List<UserDTO>> getAllUsers(@Header("Authorization") String token);
}
