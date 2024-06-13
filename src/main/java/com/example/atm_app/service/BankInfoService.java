package com.example.atm_app.service;

import com.example.atm_app.model.BankInfo;
import com.example.atm_app.repository.BankInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BankInfoService {
    @Autowired
    private BankInfoRepository repository;

    public BankInfo openAccount(BankInfo bankInfo) {
        return repository.save(bankInfo);
    }

    public Optional<BankInfo> getAccount(String accnum) {
        return repository.findById(accnum);
    }

    public BankInfo deposit(String accnum, long amount) {
        BankInfo account = repository.findById(accnum).orElseThrow();
        account.setBalance(account.getBalance() + amount);
        return repository.save(account);
    }

    public BankInfo withdraw(String accnum, long amount) {
        BankInfo account = repository.findById(accnum).orElseThrow();
        if (account.getBalance() >= amount) {
            account.setBalance(account.getBalance() - amount);
        } else {
            throw new RuntimeException("Insufficient funds");
        }
        return repository.save(account);
    }
}
