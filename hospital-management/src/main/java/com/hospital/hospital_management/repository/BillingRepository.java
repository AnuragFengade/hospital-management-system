 package com.hospital.hospital_management.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hospital.hospital_management.model.Billing;

public interface BillingRepository extends JpaRepository<Billing, Long> {

}
