const API =  "http://localhost:5500/billing";

// Load bills from backend
function loadBills() {
    fetch(API)
    .then(res => res.json())
    .then(data => {
        let rows = "";
        data.forEach(b => {
            rows += `
            <tr>
                <td>${b.id}</td>
                <td>${b.patientName}</td>
                <td>${b.amount}</td>
                <td>${b.date}</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="deleteBill(${b.id})">Delete</button>
                </td>
            </tr>`;
        });
        document.getElementById("billingTable").innerHTML = rows;
    });
}

// Add new bill
function addBill() {
    const bill = {
        patientName: document.getElementById("patientName").value,
        amount: document.getElementById("amount").value,
        date: document.getElementById("billingDate").value
    };

    fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bill)
    })
    .then(res => res.json())
    .then(() => {
        alert("Bill added successfully");
        loadBills();
        // Clear inputs
        document.getElementById("patientName").value = "";
        document.getElementById("amount").value = "";
        document.getElementById("billingDate").value = "";
    });
}

// Delete a bill
function deleteBill(id) {
    fetch(`${API}/${id}`, { method: "DELETE" })
    .then(() => {
        alert("Bill deleted successfully");
        loadBills();
    });
}