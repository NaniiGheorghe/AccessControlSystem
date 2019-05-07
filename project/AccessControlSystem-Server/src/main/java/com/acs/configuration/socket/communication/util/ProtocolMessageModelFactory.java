package com.acs.configuration.socket.communication.util;


import com.acs.configuration.socket.communication.FingerRegistrationScanEvent;
import com.acs.configuration.socket.communication.IncomingAbstractProtocolEvent;
import com.acs.configuration.socket.communication.OutgoingAbstractProtocolEvent;
import com.acs.configuration.socket.communication.ScanEvent;

public class ProtocolMessageModelFactory {

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
            case EventIdentifier.FINGER_REGISTRATION:
                protocolEvent = new FingerRegistrationScanEvent(message);
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

}
