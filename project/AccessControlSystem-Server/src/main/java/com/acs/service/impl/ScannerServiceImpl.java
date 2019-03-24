package com.acs.service.impl;

import com.acs.model.Scanner;
import com.acs.model.ScannerTypeEnum;
import com.acs.repository.ScannerRepository;
import com.acs.service.ScannerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ScannerServiceImpl implements ScannerService {

    @Autowired
    private ScannerRepository scannerRepository;

    @Override
    public Optional<Scanner> findById(Integer id) {
        return scannerRepository.findById(id);
    }

    @Override
    public List<Scanner> findAll() {
        return scannerRepository.findAll();
    }

    @Override
    public List<Scanner> findAllByScannerType(ScannerTypeEnum scannerType) {
        return scannerRepository.findAllByScannerType(scannerType);
    }


}
