package com.acs.rest;

import com.acs.dto.ActionDTO;
import com.acs.dto.convertor.ActionDTOConverter;
import com.acs.model.Action;
import com.acs.service.ActionService;
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

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;
import static org.mockito.MockitoAnnotations.initMocks;

@RunWith(MockitoJUnitRunner.class)
public class ActionControllerTest {


    @Mock
    private ActionService actionService;
    @Mock
    private ActionDTOConverter actionDTOConverter;
    @InjectMocks
    private ActionController actionController;

    @BeforeEach
    public void setUp() {
        initMocks(this);
    }

    @Test
   public void testList() {
        ActionDTO actionDto = mock(ActionDTO.class);
        Action action = new Action();

        when(actionDTOConverter.convertToDto(action)).thenReturn(actionDto);
        when(actionService.getAllActions()).thenReturn(Collections.singletonList(action));

        List<ActionDTO> list = actionController.list();
        verify(actionDTOConverter).convertToDto(action);
        assertThat(list).hasSize(1);
    }

    @Test
    public void createAction() {
        Action action = new Action();

        ResponseEntity responseEntity = actionController.createAction(action);

        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.CREATED);
    }

    @Test
    public void deleteAction() {
        Integer actionToDelete = 1;

        ResponseEntity responseEntity = actionController.deleteAction(actionToDelete);

        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
    }

    @Test
    public void updateAction() {
        Integer actionToUpdate = 1;
        Action action = new Action();

        ResponseEntity responseEntity = actionController.updateAction(actionToUpdate, action);

        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
    }
}