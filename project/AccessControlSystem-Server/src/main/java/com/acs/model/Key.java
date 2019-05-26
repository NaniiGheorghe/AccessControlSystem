package com.acs.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "acs_key")
public class Key {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    private String keyValue;

    private String keyValue2;

    private String keyValue3;

    private String keyValue4;

    private KeyTypeEnum keyType;

    @ManyToMany(targetEntity = DoorLock.class, fetch = FetchType.LAZY)
    private List<DoorLock> accessibleDoorLocks;

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

    public List<DoorLock> getAccessibleDoorLocks() {
        return accessibleDoorLocks;
    }

    public void setAccessibleDoorLocks(List<DoorLock> accessibleDoorLocks) {
        this.accessibleDoorLocks = accessibleDoorLocks;
    }

    public KeyTypeEnum getKeyType() {
        return keyType;
    }

    public void setKeyType(KeyTypeEnum keyType) {
        this.keyType = keyType;
    }

    public String getKeyValue() {
        return keyValue;
    }

    public void setKeyValue(String keyValue) {
        this.keyValue = keyValue;
    }

    public String getKeyValue2() {
        return keyValue2;
    }

    public void setKeyValue2(String keyValue2) {
        this.keyValue2 = keyValue2;
    }

    public String getKeyValue3() {
        return keyValue3;
    }

    public void setKeyValue3(String keyValue3) {
        this.keyValue3 = keyValue3;
    }

    public String getKeyValue4() {
        return keyValue4;
    }

    public void setKeyValue4(String keyValue4) {
        this.keyValue4 = keyValue4;
    }
}
