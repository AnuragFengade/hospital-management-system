package com.hospital.hospital_management.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.hospital.hospital_management.model.Appointment;
import com.hospital.hospital_management.service.AppointmentService;

@RestController
@RequestMapping("/appointments")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    @GetMapping
    public List<Appointment> getAppointments(){
        return appointmentService.getAllAppointments();
    }

    @PostMapping
    public Appointment addAppointment(@RequestBody Appointment appointment){
        return appointmentService.saveAppointment(appointment);
    }
}
