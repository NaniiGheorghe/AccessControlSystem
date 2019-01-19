package com.acs.service;

import com.acs.model.Action;

import java.util.List;
import java.util.Optional;

public interface ActionService {

    List<Action> getAllActions();

    void save(Action action);

    void delete(Action action);

    Optional<Action> findById(Integer id);

}
