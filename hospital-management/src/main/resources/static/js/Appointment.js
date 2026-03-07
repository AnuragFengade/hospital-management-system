const API = "http://localhost:5500/appointments";

// Load appointments from backend
function loadAppointments() {
    fetch(API)
    .then(res => res.json())
    .then(data => {
        let rows = "";
        data.forEach(a => {
            rows += `
            <tr>
                <td>${a.id}</td>
                <td>${a.patientName}</td>
                <td>${a.doctorName}</td>
                <td>${a.date}</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="deleteAppointment(${a.id})">Delete</button>
                </td>
            </tr>`;
        });
        document.getElementById("appointmentTable").innerHTML = rows;
    });
}

// Add new appointment
function addAppointment() {
    const appointment = {
        patientName: document.getElementById("patientName").value,
        doctorName: document.getElementById("doctorName").value,
        date: document.getElementById("appointmentDate").value
    };

    fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(appointment)
    })
    .then(res => res.json())
    .then(() => {
        alert("Appointment added successfully");
        loadAppointments();
        // Clear inputs
        document.getElementById("patientName").value = "";
        document.getElementById("doctorName").value = "";
        document.getElementById("appointmentDate").value = "";
    });
}

// Delete appointment
function deleteAppointment(id) {
    fetch(`${API}/${id}`, { method: "DELETE" })
    .then(() => {
        alert("Appointment deleted successfully");
        loadAppointments();
    });
}