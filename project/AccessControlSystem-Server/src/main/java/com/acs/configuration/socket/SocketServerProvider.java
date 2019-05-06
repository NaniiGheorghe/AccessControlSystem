package com.acs.configuration.socket;

import com.acs.configuration.socket.communication.IncomingAbstractProtocolEvent;
import com.acs.configuration.socket.communication.OutgoingAbstractProtocolEvent;
import com.acs.configuration.socket.communication.SwitchToRegistrationProtocolEvent;
import com.acs.configuration.socket.communication.util.EventIdentifier;
import com.acs.configuration.socket.communication.util.ProtocolDecodeException;
import com.acs.configuration.socket.communication.util.ProtocolMessageHandler;
import com.acs.handler.AbstractProtocolEventHandler;
import org.bouncycastle.util.test.TestRandomData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.net.SocketException;
import java.util.Random;

import static com.acs.configuration.socket.communication.util.EventIdentifier.SWITCH_TO_REGISTERING_SCAN;


@Component
public class SocketServerProvider {

    private ServerSocket serverSocket;
    private Socket clientSocket;
    private PrintWriter out;
    private BufferedReader in;

    private static int port;

    @Autowired
    private AbstractProtocolEventHandler abstractProtocolEventHandler;

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
                    System.out.println("Received line" + inputLine);

                    incomingAbstractProtocolEvent = ProtocolMessageHandler.getProtocolEvent(inputLine);
                    System.out.println("Received event" + incomingAbstractProtocolEvent.toString());
                    outgoingAbstractProtocolEvent = abstractProtocolEventHandler.handleEvent(incomingAbstractProtocolEvent);
                    System.out.println("Send event" + incomingAbstractProtocolEvent.toString());
                    out.println(outgoingAbstractProtocolEvent.getMessage());
                } catch (ProtocolDecodeException e) {
                    out.println(EventIdentifier.DECODE_ERROR);
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

    public void switchToReadMode(String scanner) {
        Random random = new Random();
        int number = random.nextInt((999999999 - 100000000) + 1) + 100000000;
        SwitchToRegistrationProtocolEvent event = new SwitchToRegistrationProtocolEvent(scanner, number);
        if (out != null) {
            out.println(event.getMessage());
        }
    }

}

