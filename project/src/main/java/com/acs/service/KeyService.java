package com.acs.service;

import com.acs.model.Key;

import java.util.List;
import java.util.Optional;

public interface KeyService {
    List<Key> getAllKeys();

    void save(Key key);

    Optional<Key> findById(Integer id);

    void delete(Key key);
}
