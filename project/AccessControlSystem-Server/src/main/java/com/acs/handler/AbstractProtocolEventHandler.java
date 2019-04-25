package com.acs.handler;

import com.acs.configuration.socket.communication.IncomingAbstractProtocolEvent;
import com.acs.configuration.socket.communication.OutgoingAbstractProtocolEvent;
import com.acs.handler.factory.ProtocolEventHandlerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public abstract class AbstractProtocolEventHandler {

    @Autowired
    private ProtocolEventHandlerFactory protocolEventHandlerFactory;

    public OutgoingAbstractProtocolEvent handleEvent(IncomingAbstractProtocolEvent abstactProtocolEvent) {
       return protocolEventHandlerFactory.getEventHandler(abstactProtocolEvent).processEvent(abstactProtocolEvent);
    }

    abstract OutgoingAbstractProtocolEvent processEvent(IncomingAbstractProtocolEvent abstactProtocolEvent);

}
