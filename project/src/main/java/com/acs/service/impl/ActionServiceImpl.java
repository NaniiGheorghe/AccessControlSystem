package com.acs.service.impl;

import com.acs.model.Action;
import com.acs.repository.ActionRepository;
import com.acs.service.ActionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ActionServiceImpl implements ActionService {

    @Autowired
    private ActionRepository actionRepository;

    @Override
    public List<Action> getAllActions() {
        return actionRepository.findAll();
    }

    @Override
    public void save(Action action) {
        actionRepository.save(action);
    }

    @Override
    public void delete(Action action) {
        actionRepository.delete(action);
    }

    @Override
    public Optional<Action> findById(Integer id) {
        return actionRepository.findById(id);
    }


}
