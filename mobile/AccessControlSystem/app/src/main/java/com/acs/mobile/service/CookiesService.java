package com.acs.mobile.service;

import android.content.Context;
import android.content.SharedPreferences;
import android.preference.PreferenceManager;

public class CookiesService {

    static final String TOKEN = "TOKEN";

    public void setToken(Context ctx, String key) {
        System.out.println("Was set token key [" + key + "]");
        SharedPreferences.Editor editor = getSharedPreferences(ctx).edit();
        editor.putString(TOKEN, key);
        editor.apply();
    }

    public String getToken(Context ctx) {
        System.out.println("Was got token key [" + getSharedPreferences(ctx).getString(TOKEN, "") + "]");
        return getSharedPreferences(ctx).getString(TOKEN, "");
    }

    private static SharedPreferences getSharedPreferences(Context ctx) {
        return PreferenceManager.getDefaultSharedPreferences(ctx);
    }

}
