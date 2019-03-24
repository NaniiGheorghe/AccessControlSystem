package com.acs.service;

import com.acs.model.Scanner;
import com.acs.model.ScannerTypeEnum;

import java.util.List;
import java.util.Optional;

public interface ScannerService {

    Optional<Scanner> findById(Integer id);

    List<Scanner> findAll();

    List<Scanner> findAllByScannerType(ScannerTypeEnum scannerType);

}
