package com.acs.configuration.socket.communication;

import com.acs.configuration.socket.communication.util.EventIdentifier;

public class ConfirmFingerRegistrationEvent extends OutgoingAbstractProtocolEvent {

    private int fingerId;

    public ConfirmFingerRegistrationEvent(int fingerId) {
        super(null);
        this.fingerId = fingerId;
        build();
    }

    @Override
    protected void build() {
        setMessage(EventIdentifier.CONFIRMED_FINGER_REGISTRATION + fingerId);
    }

    @Override
    public String toString() {
        return "ConfirmFingerRegistrationEvent{" +
                "fingerId=" + fingerId +
                '}';
    }
}
