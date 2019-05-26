package com.acs.repository;

import com.acs.model.Key;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface KeyRepository extends JpaRepository<Key, Integer> {

    @Query("SELECT k FROM Key k WHERE k.keyValue = ?1 or k.keyValue2 = ?1 or k.keyValue3 = ?1 or k.keyValue4 = ?1")
    Optional<Key> findByKeyByValues(String keyValue);

}
