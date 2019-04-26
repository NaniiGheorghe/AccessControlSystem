package com.acs.mobile.login;

import androidx.annotation.Nullable;

import com.acs.mobile.model.UnsuccessAuthenticationException;
import com.acs.mobile.model.User;

public class LoginActivityPresenter implements LoginActivityMVP.Presenter {


    @Nullable
    private LoginActivityMVP.View view;
    private LoginActivityMVP.Model model;

    LoginActivityPresenter(LoginActivityMVP.Model model) {
        this.model = model;
    }


    @Override

    public void setView(@Nullable LoginActivityMVP.View view) {
        this.view = view;
    }

    @Override
    public void loginButtonClicked() {
        if (view != null) {
            if (view.getUsername().trim().equals("") || view.getPassword().trim().equals("")) {
                view.showInputError("Please provide username and password!");
            } else {
                try {
                    String token = model.authenticate(new User(view.getUsername(), view.getPassword()));
                    model.saveTokenValue(token);
                    view.goToNextView();
                } catch (UnsuccessAuthenticationException e) {
                    view.showInputError("Username or password is not corrent!");
                }
            }
        }
    }

}
