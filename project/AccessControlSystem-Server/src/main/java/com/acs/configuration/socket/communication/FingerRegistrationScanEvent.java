package com.acs.configuration.socket.communication;

import com.acs.configuration.socket.communication.util.EventIdentifier;

import java.awt.*;

public class FingerRegistrationScanEvent extends IncomingAbstractProtocolEvent {

    private int fingerId;

    public FingerRegistrationScanEvent(String message) {
        super(message);
    }

    @Override
    public void decode() {
        fingerId = Integer.valueOf(getMessage().substring(2, getMessage().length()).trim());
        setMessage(EventIdentifier.FINGER_REGISTRATION + fingerId);
    }

    public int getFingerId() {
        return fingerId;
    }

    public void setFingerId(int fingerId) {
        this.fingerId = fingerId;
    }

    @Override
    public String toString() {
        return "FingerRegistrationScanEvent{" +
                "fingerId=" + fingerId +
                '}';
    }
}
