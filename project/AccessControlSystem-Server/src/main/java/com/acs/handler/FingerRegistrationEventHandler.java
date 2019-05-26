package com.acs.handler;

import com.acs.configuration.queue.LocalQueue;
import com.acs.configuration.socket.communication.ConfirmFingerRegistrationEvent;
import com.acs.configuration.socket.communication.FingerRegistrationScanEvent;
import com.acs.configuration.socket.communication.IncomingAbstractProtocolEvent;
import com.acs.configuration.socket.communication.OutgoingAbstractProtocolEvent;
import com.acs.service.KeyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class FingerRegistrationEventHandler extends AbstractProtocolEventHandler implements EventModel {

    @Autowired
    private KeyService keyService;


    @Override
    OutgoingAbstractProtocolEvent processEvent(IncomingAbstractProtocolEvent abstactProtocolEvent) {
        FingerRegistrationScanEvent fingerRegistrationScanEvent = getEventModel(abstactProtocolEvent);
        System.out.println("Confirmed new ID" + fingerRegistrationScanEvent.getFingerId());
        LocalQueue.getInstance().add(fingerRegistrationScanEvent.getFingerId());
        return buildResponseConfirmScanEvent(keyService.getNextId());
    }

    private OutgoingAbstractProtocolEvent buildResponseConfirmScanEvent(int nextId) {
        return new ConfirmFingerRegistrationEvent(nextId);
    }

    @Override
    public FingerRegistrationScanEvent getEventModel(IncomingAbstractProtocolEvent abstactProtocolEvent) {
        return (FingerRegistrationScanEvent) abstactProtocolEvent;
    }
}
