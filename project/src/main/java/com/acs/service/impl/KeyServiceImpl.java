package com.acs.service.impl;

import com.acs.model.Key;
import com.acs.repository.KeyRepository;
import com.acs.service.KeyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class KeyServiceImpl implements KeyService {

    @Autowired
    private KeyRepository keyRepository;

    @Override
    public List<Key> getAllKeys() {
        return keyRepository.findAll();
    }

    @Override
    public void save(Key key) {
        keyRepository.save(key);
    }

    @Override
    public Optional<Key> findById(Integer id) {
        return keyRepository.findById(id);
    }

    @Override
    public void delete(Key key) {
        keyRepository.delete(key);
    }
}
