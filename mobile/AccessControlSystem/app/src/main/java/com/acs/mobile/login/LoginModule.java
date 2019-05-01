package com.acs.mobile.login;

import com.acs.mobile.model.login.LoginModel;
import com.acs.mobile.service.CookiesService;
import com.acs.mobile.service.LoginService;

import dagger.Module;
import dagger.Provides;

@Module
public class LoginModule {

    @Provides
    LoginActivityMVP.Presenter provideLoginActivityPresenter(LoginActivityMVP.Model model) {
        return new LoginActivityPresenter(model);
    }

    @Provides
    LoginActivityMVP.Model provideLoginActivityModel(LoginService service, CookiesService cookiesService) {
        return new LoginModel(service, cookiesService);
    }

}
