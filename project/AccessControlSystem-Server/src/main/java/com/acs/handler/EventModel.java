
package com.acs.handler;

import com.acs.configuration.socket.communication.IncomingAbstractProtocolEvent;
import com.acs.configuration.socket.communication.ScanEvent;

interface EventModel {

    public ScanEvent getEventModel(IncomingAbstractProtocolEvent abstactProtocolEvent);

}