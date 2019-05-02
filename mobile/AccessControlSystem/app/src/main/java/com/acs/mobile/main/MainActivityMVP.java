package com.acs.mobile.main;

import android.content.Context;

import com.acs.mobile.model.AccessDTO;
import com.acs.mobile.model.main.AccessMangementDataModel;

import java.util.List;

import okhttp3.ResponseBody;

public class MainActivityMVP {

    interface View {

        Context getContext();

        void onResume();

        void goToLoginView();

        void updateAccessManagementList(List<AccessMangementDataModel> accessMangementDataModels);
    }

    public interface Presenter {

        void setView(MainActivityMVP.View view);

        void logoutButtonClicked();

        void loadAccessMagementComponents();

        void handleOkResponse(List<AccessDTO> accessDTO);

        void handleError(Throwable throwable);

    }

    public interface Model {

        void clearSession(Context context);

        void getAllAccesses(Context context, final MainActivityPresenter presenter);
    }


}


