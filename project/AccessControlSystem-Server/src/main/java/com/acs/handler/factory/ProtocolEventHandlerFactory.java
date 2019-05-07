package com.acs.handler.factory;

import com.acs.configuration.context.SpringContext;
import com.acs.configuration.socket.communication.FingerRegistrationScanEvent;
import com.acs.configuration.socket.communication.IncomingAbstractProtocolEvent;
import com.acs.configuration.socket.communication.ScanEvent;
import com.acs.handler.AbstractProtocolEventHandler;
import com.acs.handler.FingerRegistrationEventHandler;
import com.acs.handler.ScanEventHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ProtocolEventHandlerFactory {

//    @Autowired
//    private ScanEventHandler scanEventHandler;
//    @Autowired
//    private FingerRegistrationEventHandler fingerRegistrationEventHandler;

    public AbstractProtocolEventHandler getEventHandler(IncomingAbstractProtocolEvent abstractProtocolEvent) {

        if (abstractProtocolEvent instanceof ScanEvent) {
            return SpringContext.getBean(ScanEventHandler.class);
        } else if (abstractProtocolEvent instanceof FingerRegistrationScanEvent) {
            return SpringContext.getBean(FingerRegistrationEventHandler.class);
        }


        return null;
    }

}
