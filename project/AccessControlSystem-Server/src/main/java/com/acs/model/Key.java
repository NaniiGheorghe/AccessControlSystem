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

    private KeyTypeEnum keyType;

    @ManyToMany(targetEntity = DoorLock.class, fetch = FetchType.EAGER)
    private List<DoorLock> accessibleDoorLocks;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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
