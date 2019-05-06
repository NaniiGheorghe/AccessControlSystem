package com.acs.mobile.main;


import com.acs.mobile.dto.AccessDTO;
import com.acs.mobile.dto.UserDTO;
import com.acs.mobile.model.main.AccessMangementDataModel;
import com.acs.mobile.model.main.UserDataModel;

import java.util.ArrayList;
import java.util.List;

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

    @Override
    public void loadUsers() {
        model.getAllUsers(view.getContext(), this);
    }

    @Override
    public void handleLoadedUsers(List<UserDTO> userDTOS) {
        List<UserDataModel> users = new ArrayList<>();
        userDTOS.forEach(u -> {
            users.add(new UserDataModel(u));
        });

        view.updateUserList(users);
    }
}
