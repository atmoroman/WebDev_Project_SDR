

function validateForm() {
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    if (firstName == "") {
        alert("Name are required");
    }
    else if (lastName == "") {
        alert("Last name are required");
    }
    else if (email == "") {
        alert("Email is required");
    }

}
