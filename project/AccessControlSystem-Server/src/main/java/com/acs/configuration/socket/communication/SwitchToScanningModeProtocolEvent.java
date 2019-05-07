package com.acs.configuration.socket.communication;

import com.acs.configuration.socket.communication.util.EventIdentifier;
import org.apache.commons.lang3.StringUtils;

public class SwitchToScanningModeProtocolEvent extends OutgoingAbstractProtocolEvent {

    private String scannerId;


    public SwitchToScanningModeProtocolEvent(String scannerId) {
        super(null);
        this.scannerId = scannerId;
        build();
    }

    @Override
    protected void build() {
        String message = "";
        message += EventIdentifier.SWITCH_TO_SCANNING_SCAN;
        message += StringUtils.rightPad(String.valueOf(getScannerId()), 10, "");
        setMessage(message);
    }

    public String getScannerId() {
        return scannerId;
    }

    public void setScannerId(String scannerId) {
        this.scannerId = scannerId;
    }
}
