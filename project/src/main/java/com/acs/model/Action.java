package com.acs.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="acs_action")
public class Action {

    @Id
    @Column(name="id")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;

    @ManyToOne(targetEntity = Employee.class)
    private Employee employee;

    private Direction direction;

    private Date gendate;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public Direction getDirection() {
        return direction;
    }

    public void setDirection(Direction direction) {
        this.direction = direction;
    }

    public Date getGendate() {
        return gendate;
    }

    public void setGendate(Date gendate) {
        this.gendate = gendate;
    }
}
