package com.acs.service;

public interface AccessManagementService {

    public boolean checkAccess(String scannerId, String keyId, String scannerType);

}
