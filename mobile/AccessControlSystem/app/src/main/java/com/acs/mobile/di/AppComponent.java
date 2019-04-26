package com.acs.mobile.di;

import com.acs.mobile.login.LoginActivity;
import com.acs.mobile.login.LoginModule;

import javax.inject.Singleton;

import dagger.Component;

@Singleton
@Component(modules = {AppModule.class, LoginModule.class})
public interface AppComponent {

    void inject(LoginActivity target);

}
