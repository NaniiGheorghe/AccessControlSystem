package com.acs.mobile.main;


import com.acs.mobile.model.AccessDTO;
import com.acs.mobile.model.main.AccessMangementDataModel;

import java.util.ArrayList;
import java.util.List;

import okhttp3.ResponseBody;

public class MainActivityPresenter implements MainActivityMVP.Presenter {

    private MainActivityMVP.Model model;
    private MainActivityMVP.View view;


    MainActivityPresenter(MainActivityMVP.Model model) {
        this.model = model;
    }

    @Override
    public void setView(MainActivityMVP.View view) {
        this.view = view;
    }

    @Override
    public void logoutButtonClicked() {
        model.clearSession(view.getContext());
        view.goToLoginView();
    }

    @Override
    public void loadAccessMagementComponents() {
        model.getAllAccesses(view.getContext(), this);
    }

    @Override
    public void handleOkResponse(List<AccessDTO> accessDTO) {
        List<AccessMangementDataModel> accessMangementDataModels = new ArrayList<>();

        accessDTO.forEach(a -> {
            accessMangementDataModels.add(new AccessMangementDataModel(a.getUserDTO().getFirstName() + " " + a.getUserDTO().getLastName(),
                    a.getUserDTO().getPosition(),
                    a.getUserDTO().getDepartament(),
                    a.getUserDTO().getDefaultWorkingRoom(),
                    a.getAccessibleRoom(),
                    a.getAccessibleRoomDoorLock().getName()));
        });

        view.updateAccessManagementList(accessMangementDataModels);
    }

    @Override
    public void handleError(Throwable throwable) {

    }
}
