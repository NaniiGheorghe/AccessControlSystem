package com.acs.handler.factory;

import com.acs.configuration.socket.communication.IncomingAbstractProtocolEvent;
import com.acs.configuration.socket.communication.ScanEvent;
import com.acs.handler.AbstractProtocolEventHandler;
import com.acs.handler.ScanEventHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ProtocolEventHandlerFactory {

    @Autowired
    private ScanEventHandler scanEventHandler;

    public AbstractProtocolEventHandler getEventHandler(IncomingAbstractProtocolEvent abstractProtocolEvent) {

        if (abstractProtocolEvent instanceof ScanEvent) {
            return scanEventHandler;
        }

        return null;
    }

}
