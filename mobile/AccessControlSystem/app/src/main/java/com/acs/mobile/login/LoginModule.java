package com.acs.mobile.login;

import com.acs.mobile.model.LoginModel;
import com.acs.mobile.service.LoginService;

import dagger.Module;
import dagger.Provides;

@Module
public class LoginModule {

    @Provides
    LoginActivityMVP.Presenter provideLoginActivityPresenter(LoginActivityMVP.Model model){
        return new LoginActivityPresenter(model);
    }

    @Provides
    LoginActivityMVP.Model provideLoginActivityModel(LoginService service){
        return new LoginModel(service);
    }

}
