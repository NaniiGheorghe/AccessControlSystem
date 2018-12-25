package com.acs.repository;

import com.acs.model.DoorLock;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DoorLockRepository extends JpaRepository<DoorLock, Integer> {
}
