package com.acs.configuration.socket.communication;

public abstract class OutgoingAbstractProtocolEvent {


    private String message;

    OutgoingAbstractProtocolEvent(String message) {
        this.message = message;
    }

    protected abstract void build();

    public String getMessage() {
        return message;
    }

    void setMessage(String message) {
        this.message = message;
    }

}
