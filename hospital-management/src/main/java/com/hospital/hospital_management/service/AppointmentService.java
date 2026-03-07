 package com.hospital.hospital_management.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.hospital_management.model.Appointment;
import com.hospital.hospital_management.repository.AppointmentRepository;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    public List<Appointment> getAllAppointments(){
        return appointmentRepository.findAll();
    }

    public Appointment saveAppointment(Appointment appointment){
        return appointmentRepository.save(appointment);
    }
}