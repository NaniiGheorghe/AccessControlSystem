package com.acs.mobile.model.main;

import android.content.Context;

import com.acs.mobile.login.LoginActivityPresenter;
import com.acs.mobile.main.MainActivityMVP;
import com.acs.mobile.main.MainActivityPresenter;
import com.acs.mobile.service.AccessManagementService;
import com.acs.mobile.service.CookiesService;
import com.acs.mobile.service.UserService;

import io.reactivex.android.schedulers.AndroidSchedulers;
import io.reactivex.disposables.CompositeDisposable;
import io.reactivex.schedulers.Schedulers;

public class MainModel implements MainActivityMVP.Model {

    private CookiesService cookiesService;
    private AccessManagementService accessManagementService;
    private UserService userService;

    private CompositeDisposable compositeSubscriptions = new CompositeDisposable();


    public MainModel(CookiesService cookiesService, AccessManagementService accessManagementService, UserService userService) {
        this.cookiesService = cookiesService;
        this.accessManagementService = accessManagementService;
        this.userService = userService;
    }

    @Override
    public void clearSession(Context context) {
        cookiesService.setToken(context, "");
    }

    @Override
    public void getAllAccesses(Context context, final MainActivityPresenter presenter) {
        compositeSubscriptions.add(this.accessManagementService.getAllAccesses(this.cookiesService.getToken(context))
                .subscribeOn(Schedulers.io())
                .observeOn(AndroidSchedulers.mainThread())
                .subscribe(presenter::handleOkResponse, presenter::handleError));
    }

    @Override
    public void getAllUsers(Context context, final MainActivityPresenter presenter) {
        compositeSubscriptions.add(this.userService.getAllUsers(this.cookiesService.getToken(context))
                .subscribeOn(Schedulers.io())
                .observeOn(AndroidSchedulers.mainThread())
                .subscribe(presenter::handleLoadedUsers, presenter::handleError));
    }


}
