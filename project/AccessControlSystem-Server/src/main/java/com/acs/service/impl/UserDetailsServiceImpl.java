package com.acs.service.impl;

import com.acs.model.ApplicationUser;
import com.acs.repository.ApplicationUserRepository;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private ApplicationUserRepository applicationUserRepository;

    public UserDetailsServiceImpl(ApplicationUserRepository applicationUserRepository) {
        this.applicationUserRepository = applicationUserRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<ApplicationUser> applicationUser = applicationUserRepository.findByUsername(username);
        if (!applicationUser.isPresent()) {
            throw new UsernameNotFoundException(username);
        }
        return new User(applicationUser.get().getUsername(), applicationUser.get().getPassword(), applicationUser.get().getAuthorities());
    }


}
