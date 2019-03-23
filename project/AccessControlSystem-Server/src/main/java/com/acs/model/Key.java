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

    public String getKeyValue() {
        return keyValue;
    }

    public void setKeyValue(String keyValue) {
        this.keyValue = keyValue;
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
}
