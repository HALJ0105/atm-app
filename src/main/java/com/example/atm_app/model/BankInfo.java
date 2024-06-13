package com.example.atm_app.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class BankInfo {
    @Id
    private String accnum;
    private String name;
    private String acctype;
    private long balance;

    // Getters and setters
    public String getAccnum() {
        return accnum;
    }

    public void setAccnum(String accnum) {
        this.accnum = accnum;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAcctype() {
        return acctype;
    }

    public void setAcctype(String acctype) {
        this.acctype = acctype;
    }

    public long getBalance() {
        return balance;
    }

    public void setBalance(long balance) {
        this.balance = balance;
    }
}
