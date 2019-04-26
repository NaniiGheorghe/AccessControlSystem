package com.acs.mobile.model;

import com.acs.mobile.login.LoginActivityMVP;
import com.acs.mobile.service.LoginService;

import javax.inject.Inject;

public class LoginModel implements LoginActivityMVP.Model {

    private LoginService loginService;

    public LoginModel(LoginService service) {
        this.loginService = service;
    }

    @Override
    public String authenticate(User user) throws UnsuccessAuthenticationException {
        String token = this.loginService.authenticateUser(user);
        if (token != null && !token.isEmpty()) {
            return token;
        } else {
            throw new UnsuccessAuthenticationException();
        }
    }

    @Override
    public void saveTokenValue(String token) {

    }
}
