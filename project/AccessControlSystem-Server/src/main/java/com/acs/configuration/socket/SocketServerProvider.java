package com.acs.configuration.socket;

import com.acs.configuration.socket.communication.IncomingAbstractProtocolEvent;
import com.acs.configuration.socket.communication.OutgoingAbstractProtocolEvent;
import com.acs.configuration.socket.communication.SwitchToRegistrationProtocolEvent;
import com.acs.configuration.socket.communication.SwitchToScanningModeProtocolEvent;
import com.acs.configuration.socket.communication.util.EventIdentifier;
import com.acs.configuration.socket.communication.util.ProtocolDecodeException;
import com.acs.configuration.socket.communication.util.ProtocolMessageModelFactory;
import com.acs.handler.AbstractProtocolEventHandler;
import com.acs.service.KeyService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.BindException;
import java.net.ServerSocket;
import java.net.Socket;
import java.net.SocketException;

@Component
public class SocketServerProvider {

    Logger logger = LoggerFactory.getLogger("arduino");


    private ServerSocket serverSocket;
    private Socket clientSocket;
    private PrintWriter out;
    private BufferedReader in;

    private static int port;

    @Autowired
    private KeyService keyService;

    @Autowired
    private AbstractProtocolEventHandler abstractProtocolEventHandler;

    public void start(int port) {
        SocketServerProvider.port = port;
        try {
            IncomingAbstractProtocolEvent incomingAbstractProtocolEvent = null;
            OutgoingAbstractProtocolEvent outgoingAbstractProtocolEvent = null;

            serverSocket = new ServerSocket(port);
            logger.info("Socket connection is opened");

            clientSocket = serverSocket.accept();
            logger.info("Client with id [" + clientSocket.getInetAddress() + "] sucessfully connected.");

            out = new PrintWriter(clientSocket.getOutputStream(), true);
            in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));

            out.println(EventIdentifier.CONNECTION_ESTABLISHED);

            String inputLine;
            while ((inputLine = in.readLine()) != null) {
                try {
                    logger.info("Received message " + inputLine);

                    incomingAbstractProtocolEvent = ProtocolMessageModelFactory.getProtocolEvent(inputLine);
                    logger.info("Received event " + incomingAbstractProtocolEvent.toString());
                    outgoingAbstractProtocolEvent = abstractProtocolEventHandler.handleEvent(incomingAbstractProtocolEvent);
                    logger.info("Send event " + incomingAbstractProtocolEvent.toString());
                    out.println(outgoingAbstractProtocolEvent.getMessage());
                } catch (ProtocolDecodeException e) {
                    out.println(EventIdentifier.DECODE_ERROR);
                    logger.error(e.getMessage());
                }
            }

        } catch (BindException e) {
            e.printStackTrace();
        } catch (SocketException ex) {
            stop();
            start(SocketServerProvider.port);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void stop() {
        try {
            if (in != null)
                in.close();
            if (out != null)
                out.close();
            if (clientSocket != null)
                clientSocket.close();
            if (serverSocket != null)
                serverSocket.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void switchToReadMode(String scanner) {
        int id = keyService.getNextId();

        SwitchToRegistrationProtocolEvent event = new SwitchToRegistrationProtocolEvent(scanner, id);
        if (out != null) {
            out.println(event.getMessage());
        }
    }


    public void switchToScanningMode(String scanner) {
        SwitchToScanningModeProtocolEvent event = new SwitchToScanningModeProtocolEvent(scanner);
        if (out != null) {
            logger.info("Send message " + event.getMessage());
            out.println(event.getMessage());
        }
    }

}

