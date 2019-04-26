package com.acs.mobile.login;

import com.acs.mobile.model.UnsuccessAuthenticationException;
import com.acs.mobile.model.User;

public class LoginActivityMVP {

    interface View {

        String getUsername();

        String getPassword();

        void showInputError(String message);

        void goToNextView();

        void onResume();
    }

    interface Presenter {

        void setView(View view);

        void loginButtonClicked();

    }

    public interface Model {

        String authenticate(User user) throws UnsuccessAuthenticationException;

        void saveTokenValue(String token);

    }
}
