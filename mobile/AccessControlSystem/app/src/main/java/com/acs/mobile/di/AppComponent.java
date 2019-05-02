package com.acs.mobile.di;

import com.acs.mobile.login.LoginActivity;
import com.acs.mobile.login.LoginModule;
import com.acs.mobile.main.MainActivity;
import com.acs.mobile.main.MainModule;

import javax.inject.Singleton;

import dagger.Component;

@Singleton
@Component(modules = {AppModule.class, LoginModule.class, MainModule.class})
public interface AppComponent {

    void injectLogin(LoginActivity target);

    void injectMain(MainActivity target);

}
