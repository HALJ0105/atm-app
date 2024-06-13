package com.example.atm_app.controller;

import com.example.atm_app.model.BankInfo;
import com.example.atm_app.service.BankInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api")
public class BankInfoController {
    @Autowired
    private BankInfoService service;

    @PostMapping("/open")
    public BankInfo openAccount(@RequestBody BankInfo bankInfo) {
        return service.openAccount(bankInfo);
    }

    @GetMapping("/account/{accnum}")
    public Optional<BankInfo> getAccount(@PathVariable String accnum) {
        return service.getAccount(accnum);
    }

    @PutMapping("/deposit/{accnum}")
    public BankInfo deposit(@PathVariable String accnum, @RequestParam long amount) {
        return service.deposit(accnum, amount);
    }

    @PutMapping("/withdraw/{accnum}")
    public BankInfo withdraw(@PathVariable String accnum, @RequestParam long amount) {
        return service.withdraw(accnum, amount);
    }
}
