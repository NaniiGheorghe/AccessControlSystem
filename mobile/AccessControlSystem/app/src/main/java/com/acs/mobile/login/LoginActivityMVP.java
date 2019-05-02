package com.acs.mobile.login;

import android.content.Context;

import com.acs.mobile.model.login.Token;
import com.acs.mobile.model.login.User;

import org.json.JSONObject;

import okhttp3.ResponseBody;

public class LoginActivityMVP {

    interface View {

        String getUsername();

        String getPassword();

        void showInputError(String message);

        void goToNextView();

        void onResume();

        Context getContext();
    }

    public interface Presenter {

        void setView(View view);

        void loginButtonClicked();

        void handleOkResponse(Token token);

        void handleOkResponse(ResponseBody ResponseBody);

        void handleErrorResponse(Throwable throwable);

        void validateToken();

        void handleErrorValidateTokenResponse(Throwable throwable);
    }

    public interface Model {

        void authenticate(User user, final LoginActivityPresenter presenter);

        void saveTokenValue(Context context, String token);

        void validateToken(Context context, final LoginActivityPresenter presenter);

    }
}
