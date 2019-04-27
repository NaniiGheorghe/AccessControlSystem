package com.acs.configuration.socket.communication;

public abstract class IncomingAbstractProtocolEvent {


    private String message;

    IncomingAbstractProtocolEvent(String message) {
        this.message = message;
    }

    public abstract void decode();

    String getMessage() {
        return message;
    }

    void setMessage(String message) {
        this.message = message;
    }

}
