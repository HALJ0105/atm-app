package com.example.atm_app.repository;

import com.example.atm_app.model.BankInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BankInfoRepository extends JpaRepository<BankInfo, String> {
}
