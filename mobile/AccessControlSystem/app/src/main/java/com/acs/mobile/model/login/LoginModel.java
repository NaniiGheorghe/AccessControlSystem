package com.acs.mobile.model.login;

import android.content.Context;

import com.acs.mobile.login.LoginActivityMVP;
import com.acs.mobile.login.LoginActivityPresenter;
import com.acs.mobile.service.CookiesService;
import com.acs.mobile.service.LoginService;

import io.reactivex.android.schedulers.AndroidSchedulers;
import io.reactivex.disposables.CompositeDisposable;
import io.reactivex.schedulers.Schedulers;

public class LoginModel implements LoginActivityMVP.Model {

    private CompositeDisposable compositeSubscriptions = new CompositeDisposable();

    private LoginService loginService;
    private CookiesService cookiesService;


    public LoginModel(LoginService service, CookiesService cookiesService) {
        this.loginService = service;
        this.cookiesService = cookiesService;
    }

    @Override
    public void authenticate(User user, final LoginActivityPresenter presenter) {
        compositeSubscriptions.add(this.loginService.authenticateUser(user)
                .subscribeOn(Schedulers.io())
                .observeOn(AndroidSchedulers.mainThread())
                .subscribe(presenter::handleOkResponse, presenter::handleErrorResponse));
    }


    @Override
    public void saveTokenValue(Context context, String token) {
        cookiesService.setToken(context, token);
    }

    @Override
    public void validateToken(Context context, final LoginActivityPresenter presenter) {
        compositeSubscriptions.add(this.loginService.validateToken(cookiesService.getToken(context))
                .subscribeOn(Schedulers.io())
                .observeOn(AndroidSchedulers.mainThread())
                .subscribe(presenter::handleOkResponse, presenter::handleErrorValidateTokenResponse));
    }

}
