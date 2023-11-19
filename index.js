function minDate() {
    const today = new Date();
    return new Date(today.getFullYear() - 55, today.getMonth(), today.getDate()).toISOString().split('T')[0];
}

function maxDate() {
    const today = new Date();
    return new Date(today.getFullYear() - 18, today.getMonth(), today.getDate()).toISOString().split('T')[0];
}

const dob = document.getElementById('dob');
dob.setAttribute('min', minDate());
dob.setAttribute('max', maxDate());

let entries = [];

const formSubmit = (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;
    const atnc = document.getElementById("atnc").checked;

    const entry = {
        name,email,password,dob,atnc
    }

    entries.push(entry);
    localStorage.setItem("userEntries",JSON.stringify(entries));

}

let userForm = document.getElementById("userForm");
userForm.addEventListener("submit",formSubmit);