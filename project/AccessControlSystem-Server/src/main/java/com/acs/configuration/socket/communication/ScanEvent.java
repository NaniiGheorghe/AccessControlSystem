package com.acs.configuration.socket.communication;

public class ScanEvent extends IncomingAbstractProtocolEvent {

    private String scannerId;

    private String keyId;

    private String scannerType;

    public ScanEvent(String message) {
        super(message);
    }

    @Override
    public void decode() {
        final int scannerIdStart = 2;
        final int scannerIdEnd = 12;
        final int keyIdStart = 12;
        final int keyIdEnd = 22;
        final int scannerTypeStart = 22;
        final int scannerTypeEnd = 25;
        scannerId = getMessage().substring(scannerIdStart, scannerIdEnd).trim();
        keyId = getMessage().substring(keyIdStart, keyIdEnd).trim();
        scannerType = getMessage().substring(scannerTypeStart, scannerTypeEnd).trim();
        System.out.println(toString());
    }

    public String getScannerId() {
        return scannerId;
    }

    public void setScannerId(String scannerId) {
        this.scannerId = scannerId;
    }

    public String getKeyId() {
        return keyId;
    }

    public void setKeyId(String keyId) {
        this.keyId = keyId;
    }

    public String getScannerType() {
        return scannerType;
    }

    public void setScannerType(String scannerType) {
        this.scannerType = scannerType;
    }

    @Override
    public String toString() {
        return "ScanEvent{" +
                "scannerId=" + scannerId +
                ", keyId=" + keyId +
                ", scannerType='" + scannerType + '\'' +
                '}';
    }
}
