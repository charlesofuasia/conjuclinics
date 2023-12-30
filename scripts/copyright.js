const copyright = document.querySelector("#copy");

const dt = new Date();
const year = dt.getFullYear();

copyright.innerHTML = `<div>
        <p>&copy;${year} Conjugal Clinics</p>
        <p>Developed by Zim Technologies</p>
      </div>`