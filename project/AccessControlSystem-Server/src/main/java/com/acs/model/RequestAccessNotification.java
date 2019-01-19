package com.acs.model;

import javax.persistence.Entity;
import javax.persistence.OneToOne;

@Entity
public class RequestAccessNotification extends Notification {

    @OneToOne(targetEntity = Employee.class)
    private Employee employee;

    @OneToOne(targetEntity = OfficeRoom.class)
    private OfficeRoom officeRoom;

    public RequestAccessNotification(Employee employee, OfficeRoom officeRoom) {
        this.employee = employee;
        this.officeRoom = officeRoom;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public OfficeRoom getOfficeRoom() {
        return officeRoom;
    }

    public void setOfficeRoom(OfficeRoom officeRoom) {
        this.officeRoom = officeRoom;
    }
}
