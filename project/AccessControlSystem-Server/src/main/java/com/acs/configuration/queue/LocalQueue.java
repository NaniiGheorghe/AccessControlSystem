package com.acs.configuration.queue;

import java.util.LinkedList;
import java.util.Queue;

public class LocalQueue {

    private static final LocalQueue instance = new LocalQueue();

    private Queue<Integer> values = new LinkedList<>();

    private LocalQueue() {
    }

    public static LocalQueue getInstance() {
        return instance;
    }

    public Integer poll() {
        return values.poll();
    }

    public boolean add(Integer integer) {
        return values.add(integer);
    }


}
