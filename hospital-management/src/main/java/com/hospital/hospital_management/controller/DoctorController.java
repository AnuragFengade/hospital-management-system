package com.hospital.hospital_management.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.hospital.hospital_management.model.Doctor;
import com.hospital.hospital_management.service.DoctorService;

@RestController
@RequestMapping("/doctors")
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    @GetMapping
    public List<Doctor> getDoctors(){
        return doctorService.getAllDoctors();
    }

    @PostMapping
    public Doctor addDoctor(@RequestBody Doctor doctor){
        return doctorService.saveDoctor(doctor);
    }

    @PutMapping("/{id}")
    public Doctor updateDoctor(@PathVariable Long id, @RequestBody Doctor doctor){
        doctor.setId(id);
        return doctorService.saveDoctor(doctor);
    }
}
