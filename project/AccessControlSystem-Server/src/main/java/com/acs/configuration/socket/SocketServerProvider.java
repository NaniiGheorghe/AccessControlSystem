package com.acs.configuration.socket;

import com.acs.configuration.socket.communication.IncomingAbstractProtocolEvent;
import com.acs.configuration.socket.communication.OutgoingAbstractProtocolEvent;
import com.acs.configuration.socket.communication.util.EventIdentifier;
import com.acs.configuration.socket.communication.util.ProtocolDecodeException;
import com.acs.configuration.socket.communication.util.ProtocolMessageHandler;
import com.acs.handler.AbstractProtocolEventHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.net.SocketException;


@Component
public class SocketServerProvider {

    private ServerSocket serverSocket;
    private Socket clientSocket;
    private PrintWriter out;
    private BufferedReader in;

    private static int port;

    @Autowired
    private AbstractProtocolEventHandler abstractProtocolEventHandler;

    /*Error message*/
    private static final String DECODE_ERROR = "DECODE_ERROR";

    public void start(int port) {
        SocketServerProvider.port = port;
        try {
            IncomingAbstractProtocolEvent incomingAbstractProtocolEvent = null;
            OutgoingAbstractProtocolEvent outgoingAbstractProtocolEvent = null;

            serverSocket = new ServerSocket(port);
            System.out.println("Socket connection is opened");

            clientSocket = serverSocket.accept();
            System.out.println("Client with id [" + clientSocket.getInetAddress() + "] sucessfully connected.");

            out = new PrintWriter(clientSocket.getOutputStream(), true);
            in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));

            out.println(EventIdentifier.CONNECTION_ESTABLISHED);

            String inputLine;
            while ((inputLine = in.readLine()) != null) {
                try {
                    incomingAbstractProtocolEvent = ProtocolMessageHandler.getProtocolEvent(inputLine);
                    outgoingAbstractProtocolEvent = abstractProtocolEventHandler.handleEvent(incomingAbstractProtocolEvent);
                    out.println(outgoingAbstractProtocolEvent.getMessage());
                } catch (ProtocolDecodeException e) {
                    out.println(DECODE_ERROR);
                    System.out.println(e.getMessage());
                }
            }

        } catch (SocketException ex) {
            stop();
            start(SocketServerProvider.port);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void stop() {
        try {
            in.close();
            out.close();
            clientSocket.close();
            serverSocket.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}

