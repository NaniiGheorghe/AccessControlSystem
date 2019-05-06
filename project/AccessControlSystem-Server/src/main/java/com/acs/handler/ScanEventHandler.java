package com.acs.handler;

import com.acs.configuration.socket.communication.*;
import com.acs.model.DoorLock;
import com.acs.service.AccessManagementService;
import com.acs.service.DoorLockService;
import com.acs.service.KeyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ScanEventHandler extends AbstractProtocolEventHandler implements EventModel {

    @Autowired
    private AccessManagementService accessManagementService;
    @Autowired
    private DoorLockService doorLockService;

    @Override
    public OutgoingAbstractProtocolEvent processEvent(IncomingAbstractProtocolEvent abstactProtocolEvent) {
        ScanEvent scanEvent = getEventModel(abstactProtocolEvent);
        boolean hasAccess = accessManagementService.checkAccess(scanEvent.getScannerId(),
                scanEvent.getKeyId(),
                scanEvent.getScannerType());
        if (hasAccess) {
            return buildAcknowledgeEvent(scanEvent.getScannerId());
        } else {
            return buildRejectEvent(scanEvent.getScannerId());
        }
    }

    private OutgoingAbstractProtocolEvent buildAcknowledgeEvent(String scannerId) {
        Optional<DoorLock> doorLock = doorLockService.findByScannerName(scannerId);
        return doorLock.map(doorLock1 -> new AcknowledgeProtocolEvent(scannerId, doorLock1.getName())).orElse(null);
    }

    private OutgoingAbstractProtocolEvent buildRejectEvent(String scannerId) {
        Optional<DoorLock> doorLock = doorLockService.findByScannerName(scannerId);
        return doorLock.map(doorLock1 -> new RejectProtocolEvent(scannerId, doorLock1.getName())).orElse(new RejectProtocolEvent(null, null));
    }

    @Override
    public ScanEvent getEventModel(IncomingAbstractProtocolEvent abstactProtocolEvent) {
        return (ScanEvent) abstactProtocolEvent;
    }

}
