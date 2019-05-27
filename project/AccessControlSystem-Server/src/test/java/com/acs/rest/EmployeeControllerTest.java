package com.acs.rest;

import com.acs.dto.AccessDTO;
import com.acs.dto.UserDTO;
import com.acs.dto.convertor.AccessDTOConverter;
import com.acs.dto.convertor.UserDTOConverter;
import com.acs.model.*;
import com.acs.service.ApplicationUserSevice;
import com.acs.service.EmployeeService;
import com.acs.service.KeyService;
import com.acs.service.OfficeRoomService;
import org.junit.Test;
import org.junit.jupiter.api.BeforeEach;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.AssertionsForInterfaceTypes.assertThat;
import static org.mockito.Mockito.when;
import static org.mockito.MockitoAnnotations.initMocks;

@RunWith(MockitoJUnitRunner.class)
public class EmployeeControllerTest {

    @Mock
    private EmployeeService employeeService;

    @Mock
    private UserDTOConverter userDTOConverter;

    @Mock
    private OfficeRoomService officeRoomService;

    @Mock
    private AccessDTOConverter accessDTOConverter;

    @Mock
    private KeyService keyService;

    @Mock
    private ApplicationUserSevice applicationUserSevice;

    @InjectMocks
    private EmployeeController employeeController;


    @BeforeEach
    public void setUp() {
        initMocks(this);
    }

    @Test
    public void list() {
        Employee employee = new Employee();

        when(employeeService.getAllEmployees()).thenReturn(Collections.singletonList(employee));
        when(userDTOConverter.convertToDto(employee)).thenReturn(new UserDTO());

        List<UserDTO> list = employeeController.list();

        assertThat(list).hasSize(1);
    }

    @Test
    public void listOfAccess() {
        Employee employee = new Employee();
        Key key = new Key();
        DoorLock doorLock = new DoorLock();
        doorLock.setId(1);
        key.setAccessibleDoorLocks(Collections.singletonList(doorLock));
        employee.setKeys(Collections.singletonList(key));
        Optional<OfficeRoom> officeRoom = Optional.of(new OfficeRoom());

        when(accessDTOConverter.convertToDTO(employee, null, doorLock)).thenReturn(new AccessDTO());
        when(officeRoomService.findByDoorLock(1)).thenReturn(officeRoom);
        when(employeeService.getAllEmployees()).thenReturn(Collections.singletonList(employee));

        List<AccessDTO> accessDTOS = employeeController.listOfAccess();

        assertThat(accessDTOS).hasSize(1);
    }

    @Test
    public void createEmployee() {
        UserDTO userDTO = new UserDTO();
        Employee employee = new Employee();
        employee.setKeys(Collections.singletonList(new Key()));
        employee.setUser(new ApplicationUser());

        when(userDTOConverter.convertToEntity(userDTO)).thenReturn(employee);

        ResponseEntity responseEntity = employeeController.createEmployee(userDTO);

        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.CREATED);
    }

    @Test
    public void deleteEmployee() {
    }

    @Test
    public void updateEmployee() {
    }

    @Test
    public void requestAccess() {
    }

    @Test
    public void giveAccess() {
    }

    @Test
    public void removeAccess() {
    }

    @Test
    public void createEmployee2() {
    }
}