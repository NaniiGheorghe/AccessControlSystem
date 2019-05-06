package com.acs.configuration.socket.communication;

import com.acs.configuration.socket.communication.OutgoingAbstractProtocolEvent;
import com.acs.configuration.socket.communication.util.EventIdentifier;
import org.apache.commons.lang3.StringUtils;

public class SwitchToRegistrationProtocolEvent extends OutgoingAbstractProtocolEvent {

    private int nextFingerId;
    private String scannerId;


    public SwitchToRegistrationProtocolEvent(String scanner, int nextFingerId) {
        super(null);
        this.nextFingerId = nextFingerId;
        this.scannerId = scanner;
        build();
    }

    @Override
    protected void build() {
        String message = "";
        message += EventIdentifier.SWITCH_TO_REGISTERING_SCAN;
        message += StringUtils.rightPad(String.valueOf(getScannerId()), 10, "");
        message += StringUtils.rightPad(String.valueOf(getNextFingerId()), 10, "");
        setMessage(message);
    }

    private int getNextFingerId() {
        return nextFingerId;
    }

    public void setNextFingerId(int nextFingerId) {
        this.nextFingerId = nextFingerId;
    }

    private String getScannerId() {
        return scannerId;
    }

    public void setScannerId(String scannerId) {
        this.scannerId = scannerId;
    }
}
