const residenceLocation = document.querySelector("#region");
const ftfNote = document.querySelector("#ftf-option");

if(residenceLocation.value == "lagos"){
    ftfNote.textContent = "Great news! Face to face consultation is also available in Lagos"
}