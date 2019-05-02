package com.acs.mobile.di;

import android.app.Application;
import android.content.Context;

import androidx.annotation.Nullable;

import com.acs.mobile.service.AccessManagementService;
import com.acs.mobile.service.CookiesService;
import com.acs.mobile.service.LoginService;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import javax.inject.Singleton;

import dagger.Module;
import dagger.Provides;
import okhttp3.OkHttpClient;
import okhttp3.logging.HttpLoggingInterceptor;
import retrofit2.Retrofit;
import retrofit2.adapter.rxjava2.RxJava2CallAdapterFactory;
import retrofit2.converter.gson.GsonConverterFactory;
import timber.log.Timber;

@Module
class AppModule {

    private Application application;

    AppModule(Application application) {
        this.application = application;
    }

    @Provides
    @Singleton
    Context provideContext() {
        return application;
    }

    @Provides
    static LoginService provideLoginService(Retrofit retrofit) {
        return retrofit.create(LoginService.class);
    }

    @Provides
    static AccessManagementService provideAccessManagementService(Retrofit retrofit) {
        return retrofit.create(AccessManagementService.class);
    }

    @Provides
    static CookiesService provideCookiesService() {
        return new CookiesService();
    }

    @Provides
    static Gson provideGson() {
        return new GsonBuilder()
                .serializeNulls()
                .create();
    }

    @Provides
    static OkHttpClient provideOkHttpClient() {

        HttpLoggingInterceptor logging = new HttpLoggingInterceptor(new HttpLoggingInterceptor.Logger() {
            @Override
            public void log(@Nullable String message) {
                Timber.tag("HttpLogging").d(message);
            }
        });

        return new OkHttpClient.Builder()
                .addInterceptor(logging.setLevel(HttpLoggingInterceptor.Level.BASIC))
                .build();
    }

    @Provides
    static Retrofit provideRetrofit(Context context, OkHttpClient client) {
        String baseUrl = "http://192.168.100.4:8080";
        //String baseUrl = "http://172.17.41.91:8080";
        return new Retrofit.Builder()
                .baseUrl(baseUrl)
                .client(client)
                .addCallAdapterFactory(RxJava2CallAdapterFactory.create())
                .addConverterFactory(GsonConverterFactory.create())
                .build();
    }
}
