package com.acs.configuration.socket.communication.util;


import com.acs.configuration.socket.communication.IncomingAbstractProtocolEvent;
import com.acs.configuration.socket.communication.OutgoingAbstractProtocolEvent;
import com.acs.configuration.socket.communication.ScanEvent;

public class ProtocolMessageHandler {

    public static IncomingAbstractProtocolEvent getProtocolEvent(String message) throws ProtocolDecodeException {

        IncomingAbstractProtocolEvent protocolEvent = null;
        String identifier;

        try {
            identifier = message.substring(0, 2);
        } catch (NullPointerException | IndexOutOfBoundsException ex) {
            throw new ProtocolDecodeException("Wrong message [" + message + "].");
        }

        switch (identifier) {
            case EventIdentifier.SCAN_EVENT:
                protocolEvent = new ScanEvent(message);
                break;
            default:
                throw new ProtocolDecodeException("Identifier [" + identifier + "] is invalid.");
        }

        try {
            protocolEvent.decode();
        } catch (IndexOutOfBoundsException | NumberFormatException ex) {
            throw new ProtocolDecodeException("Protocol decode for message [" + message + "] failed.");
        }

        return protocolEvent;
    }

    public static String buildProtocolMessage(OutgoingAbstractProtocolEvent outgoingAbstractProtocolEvent){
        return null;
    }


}
