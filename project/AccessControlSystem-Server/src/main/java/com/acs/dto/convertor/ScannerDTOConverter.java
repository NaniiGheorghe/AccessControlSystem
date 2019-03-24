package com.acs.dto.convertor;

import com.acs.dto.KeyDTO;
import com.acs.dto.ScannerDTO;
import com.acs.model.Key;
import com.acs.model.KeyTypeEnum;
import com.acs.model.Scanner;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ScannerDTOConverter {

    @Autowired
    private ModelMapper modelMapper;

    public ScannerDTO convertToDto(Scanner scanner) {
        ScannerDTO scannerDTO = new ScannerDTO();
        scannerDTO.setId(scanner.getId());
        scannerDTO.setName(scanner.getName());
        scannerDTO.setScannerType(scanner.getScannerType().name());
        return scannerDTO;
    }

    public Scanner convertToEntity(ScannerDTO scannerDTO) {
        Scanner scanner = modelMapper.map(scannerDTO, Scanner.class);
        return scanner;
    }


}
