package com.acs.repository;

import com.acs.model.DoorLock;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DoorLockRepository extends JpaRepository<DoorLock, Integer> {

    @Override
    Optional<DoorLock> findById(Integer integer);

    Optional<DoorLock> findByName(String name);

    Optional<DoorLock> findByScanner_Name(String name);
}
