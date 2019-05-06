package com.acs.mobile.main;

import android.content.Context;

import com.acs.mobile.dto.AccessDTO;
import com.acs.mobile.dto.UserDTO;
import com.acs.mobile.model.main.AccessMangementDataModel;
import com.acs.mobile.model.main.UserDataModel;

import java.util.List;

public class MainActivityMVP {

    interface View {

        Context getContext();

        void onResume();

        void goToLoginView();

        void updateAccessManagementList(List<AccessMangementDataModel> accessMangementDataModels);

        void updateUserList(List<UserDataModel> users);
    }

    public interface Presenter {

        void setView(MainActivityMVP.View view);

        void logoutButtonClicked();

        void loadAccessMagementComponents();

        void handleOkResponse(List<AccessDTO> accessDTO);

        void handleError(Throwable throwable);

        void loadUsers();

        void handleLoadedUsers(List<UserDTO> userDTOS);
    }

    public interface Model {

        void clearSession(Context context);

        void getAllAccesses(Context context, final MainActivityPresenter presenter);

        void getAllUsers(Context context, final MainActivityPresenter presenter);
    }


}


