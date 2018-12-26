package com.acs.service;

import com.acs.model.OfficeRoom;
import com.acs.model.User;

import java.util.List;

public interface UserService {
    void save(User user);

    List<User> getAllUsers();
}
