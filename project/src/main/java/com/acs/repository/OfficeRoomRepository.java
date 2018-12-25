package com.acs.repository;

import com.acs.model.OfficeRoom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OfficeRoomRepository extends JpaRepository<OfficeRoom, Integer> {
}
