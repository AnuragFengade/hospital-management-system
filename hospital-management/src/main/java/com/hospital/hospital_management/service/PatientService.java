 package com.hospital.hospital_management.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.hospital_management.model.Patient;
import com.hospital.hospital_management.repository.PatientRepository;

@Service
public class PatientService {

    @Autowired
    private PatientRepository patientRepository;

    public List<Patient> getAllPatients(){
        return patientRepository.findAll();
    }

    public Patient savePatient(Patient patient){
        return patientRepository.save(patient);
    }
}