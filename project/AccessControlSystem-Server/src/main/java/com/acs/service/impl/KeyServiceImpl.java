package com.acs.service.impl;

import com.acs.configuration.queue.LocalQueue;
import com.acs.model.Key;
import com.acs.repository.KeyRepository;
import com.acs.service.KeyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
public class KeyServiceImpl implements KeyService {

    @Autowired
    private KeyRepository keyRepository;

    @Override
    public List<Key> getAllKeys() {
        return keyRepository.findAll();
    }

    @Override
    public Key save(Key key) {
        return keyRepository.save(key);
    }

    @Override
    public void save(int name) {

    }

    @Override
    public Optional<Key> findById(Integer id) {
        return keyRepository.findById(id);
    }

    @Override
    public void delete(Key key) {
        keyRepository.delete(key);
    }

    @Override
    public Optional<Key> findByValue(String keyValue) {
        return keyRepository.findByKeyByValues(keyValue);
    }

    @Override
    public int getNextId() {
        Random random = new Random();
        int number = 0;
        do {
            number = random.nextInt((256 - 1) + 1) + 1;
        }
        while (keyRepository.findByKeyByValues(String.valueOf(number)).isPresent() ||
                LocalQueue.getInstance().getTempKeyIds().contains(number));

        LocalQueue.getInstance().add(number);

        return number;
    }
}
