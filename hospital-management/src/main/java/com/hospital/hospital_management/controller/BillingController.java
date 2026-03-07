package com.hospital.hospital_management.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.hospital.hospital_management.model.Billing;
import com.hospital.hospital_management.service.BillingService;

@RestController
@RequestMapping("/billing")
public class BillingController {

    @Autowired
    private BillingService billingService;

    @GetMapping
    public List<Billing> getBills(){
        return billingService.getAllBills();
    }

    @PostMapping
    public Billing addBill(@RequestBody Billing billing){
        return billingService.saveBill(billing);
    }
}
