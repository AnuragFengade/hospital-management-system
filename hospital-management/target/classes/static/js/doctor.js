const API = "http://localhost:5500/doctors";

 {

fetch(API)

.then(res => res.json())

.then(data => {

let rows="";

data.forEach(d => {

rows += `
<tr>
<td>${d.id}</td>
<td>${d.name}</td>
<td>${d.specialization}</td>
</tr>
`;

});

document.getElementById("doctorTable").innerHTML = rows;

});

}

function addDoctor(){

const doctor = {

name: document.getElementById("name").value,
specialization: document.getElementById("specialization").value

};

fetch(API,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(doctor)
})
.then(()=>loadDoctors());

}
 
async function loadDoctors() {
const response = await fetch("http://localhost:5500/doctors");
const doctors = await response.json();

let table = document.getElementById("doctorTable");

doctors.forEach(doc => {
let row = `
<tr>
<td>${doc.id}</td>
<td>${doc.name}</td>
<td>${doc.specialization}</td>
</tr>
`;
table.innerHTML += row;
});
}

loadDoctors();
