package com.acs.rest;

import com.acs.dto.DoorLockDTO;
import com.acs.dto.convertor.DoorLockDTOConverter;
import com.acs.model.*;
import com.acs.service.DoorLockService;
import com.acs.service.EmployeeService;
import com.acs.service.OfficeRoomService;
import org.junit.Test;
import org.junit.jupiter.api.BeforeEach;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import javax.swing.text.html.Option;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Java6Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;
import static org.mockito.MockitoAnnotations.initMocks;

@RunWith(MockitoJUnitRunner.class)
public class DoorLockControllerTest {

    @Mock
    private DoorLockService doorLockService;

    @Mock
    private OfficeRoomService officeRoomService;

    @Mock
    private EmployeeService employeeService;

    @Mock
    private DoorLockDTOConverter doorLockDTOConverter;

    @InjectMocks
    private DoorLockController doorLockController;

    @BeforeEach
    public void setUp() {
        initMocks(this);
    }

    @Test
    public void list() {
        DoorLock doorLock = new DoorLock();

        when(doorLockService.getAllDoorLocks()).thenReturn(Collections.singletonList(doorLock));

        List<DoorLock> list = doorLockController.list();

        assertThat(list).size().isEqualTo(1);
    }

    @Test
    public void createDoorLock() {
        DoorLock doorLock = new DoorLock();

        ResponseEntity responseEntity = doorLockController.createDoorLock(doorLock);

        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.CREATED);
    }

    @Test
    public void deleteDoorLock() {
        Integer idToDelete = 1;

        ResponseEntity responseEntity = doorLockController.deleteDoorLock(idToDelete);

        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
    }

    @Test
    public void updateDoorLock() {
        Integer idToUpdate = 1;
        DoorLock doorLock = new DoorLock();

        ResponseEntity responseEntity = doorLockController.updateDoorLock(idToUpdate, doorLock);

        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
    }

    @Test
    public void getInaccessibleDoorLocksForRoom() {
        Integer emloyeeId = 1;
        Integer roomId = 1;
        Optional<Employee> employee = Optional.of(new Employee());
        Key key = new Key();
        key.setAccessibleDoorLocks(Collections.singletonList(new DoorLock()));
        employee.get().setKeys(Collections.singletonList(key));
        Optional<OfficeRoom> officeRoom = Optional.of(new OfficeRoom());
        officeRoom.get().setDoorLocks(Collections.singletonList(new DoorLock()));

        when(employeeService.findById(emloyeeId)).thenReturn(employee);
        when(officeRoomService.findById(roomId)).thenReturn(officeRoom);

        List<DoorLockDTO> inaccessibleDoorLocks = doorLockController.getInaccessibleDoorLocksForRoom(emloyeeId, roomId);

        assertThat(inaccessibleDoorLocks.size()).isEqualTo(1);
    }
}