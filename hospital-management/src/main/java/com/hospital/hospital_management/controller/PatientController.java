 package com.hospital.hospital_management.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.hospital.hospital_management.model.Patient;
import com.hospital.hospital_management.service.PatientService;

@RestController
@RequestMapping("/patients")
public class PatientController {

    @Autowired
    private PatientService patientService;

    @GetMapping
    public List<Patient> getPatients(){
        return patientService.getAllPatients();
    }

    @PostMapping
    public Patient addPatient(@RequestBody Patient patient){
        return patientService.savePatient(patient);
    }
}
