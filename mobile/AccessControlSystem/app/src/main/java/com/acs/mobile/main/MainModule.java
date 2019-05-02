package com.acs.mobile.main;

import com.acs.mobile.model.main.MainModel;
import com.acs.mobile.service.AccessManagementService;
import com.acs.mobile.service.CookiesService;

import dagger.Module;
import dagger.Provides;

@Module
public class MainModule {

    @Provides
    MainActivityMVP.Presenter provideMainActivityPresenter(MainActivityMVP.Model model) {
        return new MainActivityPresenter(model);
    }

    @Provides
    MainActivityMVP.Model provideMainActivityModel(CookiesService cookiesService, AccessManagementService accessManagementService) {
        return new MainModel(cookiesService, accessManagementService);
    }

}
