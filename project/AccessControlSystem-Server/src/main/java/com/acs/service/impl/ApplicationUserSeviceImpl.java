package com.acs.service.impl;

import com.acs.model.ApplicationUser;
import com.acs.repository.ApplicationUserRepository;
import com.acs.service.ApplicationUserSevice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ApplicationUserSeviceImpl implements ApplicationUserSevice {

    @Autowired
    private ApplicationUserRepository applicationUserRepository;


    @Override
    public void save(ApplicationUser aplicationUser) {
        applicationUserRepository.save(aplicationUser);
    }
}

