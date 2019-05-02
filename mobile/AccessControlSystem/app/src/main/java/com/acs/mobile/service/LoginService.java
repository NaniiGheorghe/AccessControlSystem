package com.acs.mobile.service;

import com.acs.mobile.model.login.User;
import com.acs.mobile.model.login.Token;

import io.reactivex.Single;
import okhttp3.ResponseBody;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.Header;
import retrofit2.http.POST;

public interface LoginService {

    @POST("/login")
    Single<Token> authenticateUser(@Body() User user);

    @GET("/users/validateToken")
    Single<ResponseBody> validateToken(@Header("Authorization") String token);

}
