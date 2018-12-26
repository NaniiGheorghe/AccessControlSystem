package com.acs.service.impl;

import com.acs.model.Notification;
import com.acs.repository.NotificationRepository;
import com.acs.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NotificationServiceImpl implements NotificationService {

    @Autowired
    private NotificationRepository notificationRepository;

    @Override
    public void create(Notification notification) {
        notificationRepository.save(notification);
    }
}
