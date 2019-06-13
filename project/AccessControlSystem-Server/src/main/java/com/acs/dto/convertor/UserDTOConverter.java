package com.acs.dto.convertor;

import com.acs.dto.UserDTO;
import com.acs.model.ApplicationUser;
import com.acs.model.Employee;
import com.acs.model.Key;
import com.acs.model.OfficeRoom;
import com.acs.service.OfficeRoomService;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
public class UserDTOConverter {

    @Autowired
    private OfficeRoomService officeRoomService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    private KeyDTOConverter keyDTOConverter;

    public UserDTO convertToDto(Employee employee) {
        UserDTO userDTO = new UserDTO();
        userDTO.setId(employee.getId());
        userDTO.setUsergroup(employee.getUser().getUsergroup());
        userDTO.setFirstName(employee.getFirsName());
        userDTO.setLastName(employee.getLastName());
        userDTO.setDefaultWorkingRoom(employee.getWorkingRoom().getName());
        userDTO.setKeys(employee.getKeys().stream()
                .map(keyDTOConverter::convertToDto)
                .collect(Collectors.toList()));
        userDTO.setId(employee.getId());
        userDTO.setPosition(employee.getPositions());
        userDTO.setDepartament(employee.getDepartament());
        userDTO.setImage(employee.getImage());
        return userDTO;
    }


    public Employee convertToEntity(UserDTO userDTO) {
        Optional<OfficeRoom> officeRoomOptional = officeRoomService.findByName(userDTO.getDefaultWorkingRoom());
        Employee employee = new Employee();
        ApplicationUser applicationUser = new ApplicationUser();
        applicationUser.setUsername(userDTO.getUsername());
        applicationUser.setPassword(bCryptPasswordEncoder.encode(userDTO.getPassword()));
        applicationUser.setUsergroup(userDTO.getUsergroup());
        employee.setUser(applicationUser);
        employee.setFirsName(userDTO.getFirstName());
        employee.setLastName(userDTO.getLastName());
        officeRoomOptional.ifPresent(employee::setWorkingRoom);
        employee.setPositions(userDTO.getPosition());
        employee.setDepartament(userDTO.getDepartament());
        employee.setImage(userDTO.getImage());
        employee.setKeys(userDTO.getKeys().stream()
                .map(keyDTOConverter::convertToEntity)
                .collect(Collectors.toList()));

        return employee;
    }

}
