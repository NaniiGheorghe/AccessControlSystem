package com.acs.service.impl;

import com.acs.configuration.queue.LocalQueue;
import com.acs.model.Key;
import com.acs.repository.KeyRepository;
import com.acs.service.KeyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

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
        List<Integer> keyIds = keyRepository.findAll().stream().map(Key::getId).collect(Collectors.toList());
        Optional<Integer> max = keyIds.stream().max(Comparator.naturalOrder());
        if(max.isPresent()){
            key.setId(max.get() + 1);
        }else{
            key.setId(1);
        }
        return keyRepository.save(key);
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

        LocalQueue.getInstance().addNewKeyId(number);

        return number;
    }
}
