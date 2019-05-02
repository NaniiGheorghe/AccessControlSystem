package com.acs.mobile.service;

import com.acs.mobile.model.AccessDTO;

import java.util.List;

import io.reactivex.Single;
import retrofit2.http.GET;
import retrofit2.http.Header;


public interface AccessManagementService {

    @GET("/administrator/api/v1/employee/list/access")
    Single<List<AccessDTO>> getAllAccesses(@Header("Authorization") String token);

}
