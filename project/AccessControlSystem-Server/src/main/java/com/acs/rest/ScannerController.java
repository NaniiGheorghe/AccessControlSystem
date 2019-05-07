package com.acs.rest;

import com.acs.configuration.queue.LocalQueue;
import com.acs.configuration.socket.SocketServerProvider;
import com.acs.dto.ScannerDTO;
import com.acs.dto.UserDTO;
import com.acs.dto.convertor.ScannerDTOConverter;
import com.acs.model.ScannerTypeEnum;
import com.acs.service.ScannerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class ScannerController {

    @Autowired
    private ScannerService scannerService;

    @Autowired
    private ScannerDTOConverter scannerDTOConverter;

    @Autowired
    private SocketServerProvider socketServerProvider;

    @Transactional
    @RequestMapping(value = "/administrator/api/v1/scanner/list/", method = RequestMethod.GET)
    public List<ScannerDTO> list() {
        return scannerService.findAll().stream()
                .map(scannerDTOConverter::convertToDto)
                .collect(Collectors.toList());
    }

    @Transactional
    @RequestMapping(value = "/administrator/api/v1/scanner/list/byType/{id}", method = RequestMethod.GET)
    public List<ScannerDTO> listByType(@PathVariable(value = "id") Integer id) {
        ScannerTypeEnum scannerType = null;
        if (id == 0) {
            scannerType = ScannerTypeEnum.FINGERPRINT_SCANNER;
        } else if (id == 1) {
            scannerType = ScannerTypeEnum.ELECTRONIC_KEY_SCANNER;
        }
        return scannerService.findAllByScannerType(scannerType).stream()
                .map(scannerDTOConverter::convertToDto)
                .collect(Collectors.toList());
    }

    @RequestMapping(value = "/administrator/api/v1/scanner/switchMode/registration/{scannerId}", method = RequestMethod.POST)
    public void swithToRegistration(@PathVariable(value = "scannerId") String scannerId) {
        socketServerProvider.switchToReadMode(scannerId);
    }

    @RequestMapping(value = "/administrator/api/v1/scanner/switchMode/scanning/{scannerId}", method = RequestMethod.POST)
    public String switchToScanning(@PathVariable(value = "scannerId") String scannerId) {
        boolean fingerIsScanned = false;
        String number = null;
        do {
            Integer id = LocalQueue.getInstance().poll();
            if (id != null) {
                fingerIsScanned = true;
                number = id.toString();
            }
            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        } while (!fingerIsScanned);
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        socketServerProvider.switchToScanningMode(scannerId);
        return number;
    }



    @RequestMapping(value = "/administrator/api/v1/scanner/waitForScan", method = RequestMethod.POST)
    public String waitForScan() {
        boolean fingerIsScanned = false;
        String number = null;
        do {
            Integer id = LocalQueue.getInstance().poll();
            if (id != null) {
                fingerIsScanned = true;
                number = id.toString();
            }
            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        } while (!fingerIsScanned);
        return number;
    }


}
