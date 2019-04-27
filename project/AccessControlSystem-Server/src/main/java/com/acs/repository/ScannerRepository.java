package com.acs.repository;

import com.acs.model.Scanner;
import com.acs.model.ScannerTypeEnum;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ScannerRepository extends JpaRepository<Scanner, Integer> {

    Optional<Scanner> findById(Integer id);

    List<Scanner> findAll();

    List<Scanner> findAllByScannerType(ScannerTypeEnum scannerType);

    Optional<Scanner> findByName(String name);

}
