package com.acs.mobile.login;

import androidx.annotation.Nullable;

import com.acs.mobile.model.login.Token;
import com.acs.mobile.model.login.User;

import okhttp3.ResponseBody;

public class LoginActivityPresenter implements LoginActivityMVP.Presenter {

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
                model.authenticate(new User(view.getUsername(), view.getPassword()), this);
            }
        }
    }


    @Override
    public void handleOkResponse(Token token) {
        model.saveTokenValue(view.getContext(), token.getValue());
        view.goToNextView();
    }

    @Override
    public void handleOkResponse(ResponseBody responseBody) {
        view.goToNextView();
    }

    @Override
    public void handleErrorResponse(Throwable throwable) {
        throwable.printStackTrace();
        view.showInputError("Username or password is not corrent!");
    }

    @Override
    public void validateToken() {
        model.validateToken(view.getContext(), this);
    }

    @Override
    public void handleErrorValidateTokenResponse(Throwable throwable) {
        throwable.printStackTrace();
    }


}
