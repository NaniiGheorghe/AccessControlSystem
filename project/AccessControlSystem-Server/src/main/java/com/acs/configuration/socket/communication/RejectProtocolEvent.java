package com.acs.configuration.socket.communication;

import com.acs.configuration.socket.communication.util.EventIdentifier;
import org.apache.commons.lang3.StringUtils;

public class RejectProtocolEvent extends OutgoingAbstractProtocolEvent {

    /**
     * Defined 10 positions
     */
    private String scannerId;
    /**
     * Defined 10 positions
     */
    private String doorLockId;


    public RejectProtocolEvent(String scannerId, String doorLockId) {
        super(null);
        this.scannerId = scannerId;
        this.doorLockId = doorLockId;
        if (scannerId == null || doorLockId == null) {
            setMessage(EventIdentifier.DECODE_ERROR);
        } else {
            build();
        }
    }

    @Override
    public void build() {
        String message = "";
        message += EventIdentifier.REJECT_EVENT;
        message += StringUtils.rightPad(String.valueOf(getScannerId()), 10, "");
        message += StringUtils.rightPad(String.valueOf(getDoorLockId()), 10, "");
        setMessage(message);
    }

    private String getScannerId() {
        return scannerId;
    }

    private String getDoorLockId() {
        return doorLockId;
    }
}
