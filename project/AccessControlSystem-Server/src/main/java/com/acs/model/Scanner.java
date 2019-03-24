package com.acs.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "acs_scanner")
public class Scanner {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    private ScannerTypeEnum scannerType;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ScannerTypeEnum getScannerType() {
        return scannerType;
    }

    public void setScannerType(ScannerTypeEnum scannerType) {
        this.scannerType = scannerType;
    }
}
