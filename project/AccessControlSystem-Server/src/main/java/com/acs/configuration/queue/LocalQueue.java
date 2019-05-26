package com.acs.configuration.queue;

import io.swagger.models.auth.In;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

public class LocalQueue {

    private static final LocalQueue instance = new LocalQueue();

    private Queue<Integer> values = new LinkedList<>();

    private List<Integer> tempKeyIds = new ArrayList<>();

    private LocalQueue() {
    }

    public static LocalQueue getInstance() {
        return instance;
    }

    public Integer poll() {
        return values.poll();
    }

    public void add(Integer integer) {
        values.add(integer);
    }

    public List<Integer> getTempKeyIds() {
        return tempKeyIds;
    }

    public void addNewKeyId(Integer keyId) {
        tempKeyIds.add(keyId);
    }
}
