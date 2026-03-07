 package com.hospital.hospital_management.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.hospital_management.model.Billing;
import com.hospital.hospital_management.repository.BillingRepository;

@Service
public class BillingService {

    @Autowired
    private BillingRepository billingRepository;

    public List<Billing> getAllBills(){
        return billingRepository.findAll();
    }

    public Billing saveBill(Billing billing){
        return billingRepository.save(billing);
    }
}