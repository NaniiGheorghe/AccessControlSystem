
package com.acs.configuration.socket.communication.util;


public class EventIdentifier {

    //Incoming
    public static final String SCAN_EVENT = "SC";
    public static final String FINGER_REGISTRATION = "FR";

    //Outgoing
    public final static String ACNOWLEDGE_EVENT = "AKN";
    public final static String REJECT_EVENT = "RJE";
    public final static String CONNECTION_ESTABLISHED = "CNE";
    public final static String SWITCH_TO_REGISTERING_SCAN = "SFR";
    public final static String SWITCH_TO_SCANNING_SCAN = "SFS";
    public final static String CONFIRMED_FINGER_REGISTRATION = "CFR";


    /*Error message*/
    public static final String DECODE_ERROR = "DECODE_ERROR";
}

