const API =  "http://localhost:5500/patients";  

function loadPatients(){

fetch(API)

.then(res => res.json())

.then(data => {

let rows = "";

data.forEach(p => {

rows += `
<tr>
<td>${p.id}</td>
<td>${p.name}</td>
<td>${p.age}</td>
<td>${p.disease}</td>
</tr>
`;

});

document.getElementById("patientTable").innerHTML = rows;

});

}

function addPatient(){

const patient = {

name: document.getElementById("name").value,
age: document.getElementById("age").value,
disease: document.getElementById("disease").value

};

fetch(API,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(patient)
})
.then(()=>loadPatients());

}
fetch("http://localhost:5500/patients")
.then(res => res.json())
.then(data => {

let rows = "";

data.forEach(p => {
rows += `
<tr>
<td>${p.id}</td>
<td>${p.name}</td>
<td>${p.age}</td>
<td>${p.disease}</td>
</tr>
`;
});

document.getElementById("patientTable").innerHTML = rows;

});