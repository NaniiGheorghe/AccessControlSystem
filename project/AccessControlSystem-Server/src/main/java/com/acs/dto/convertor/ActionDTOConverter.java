package com.acs.dto.convertor;

import com.acs.dto.ActionDTO;
import com.acs.model.Action;
import com.acs.model.DoorLock;
import com.acs.service.ActionService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.stream.Collectors;

@Component
public class ActionDTOConverter {

    @Autowired
    private ModelMapper modelMapper;

    public ActionDTO convertToDto(Action action) {
        ActionDTO actionDTO = modelMapper.map(action, ActionDTO.class);
        actionDTO.setEmployee(action.getEmployee().getFirsName() + " " + action.getEmployee().getLastName());
        actionDTO.setOfficeRoom(action.getOfficeRoom().getName());
        actionDTO.setDoorLock(action.getOfficeRoom().getDoorLocks().stream()
                .map(DoorLock::getId)
                .collect(Collectors.toList()));
        return actionDTO;
    }

    public Optional<Action> convertToEntity(ActionDTO actionDTO) {
        Action action = modelMapper.map(actionDTO, Action.class);
        return Optional.ofNullable(action);
    }

}
