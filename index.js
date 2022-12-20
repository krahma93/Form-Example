
// GET ELEMENTS
const signupForm = document.getElementById("signup-form");
const firstName = document.getElementById("firstname-input")
const firstError= document.getElementById("first-error")
const surname = document.getElementById("surname-input")
const surnameError= document.getElementById("surname-error")
const userName = document.getElementById("username");
const userNameError = document.getElementById("username-error");
const avatarUrl = document.getElementById("avatar");
const avatarUrlError = document.getElementById("avatarUrl-error");


// ADD EVENT LISTENERS

firstName.addEventListener("blur", validFirstname)
surname.addEventListener("blur", validSurname)
userName.addEventListener("blur", validUsername)
avatarUrl.addEventListener("blur", validAvatarUrl)

signupForm.addEventListener("submit", handleSubmit)

//FUNCTIONS
function validFirstname(event) {
    const input = event.target

    if (/^[A-Z]+[a-zA-Z]*$/.test(input.value) === false) {
        firstError.innerText = " First name must start with a capital letter."
        input.classList.add("invalid")
        input.classList.remove("valid");

    } else { 
        firstError.innerText = "";
        input.classList.add("valid");
        input.classList.remove("invalid");   
    }
}

function validSurname(event) {
    const input = event.target

    if (/^[A-Z]+[a-zA-Z]*$/.test(input.value) === false) {
        surnameError.innerText = " Surname must start with a capital letter."
        input.classList.add("invalid")
        input.classList.remove("valid");

    } else { 
        surnameError.innerText = "";
        input.classList.add("valid");
        input.classList.remove("invalid");   
    }
}

function validUsername(event) {
    const input = event.target;

    if (/\d/.test(input.value) === false) {
        userNameError.innerText = "Username must include at lease one digit.";
        input.classList.add("invalid");
        input.classList.remove("valid");

    } else {
      userNameError.innerText = "";
         input.classList.add("valid");
         input.classList.remove("invalid");                                                                                   
}                                   
}

function validAvatarUrl(event) {
    const input = event.target;

    if(/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/.test(input.value) === false ) {
        avatarUrlError.innerText = "Please enter a valid avatar URL.";
        input.classList.add("invalid")
        input.classList.remove("valid");

    } else { 
        avatarUrlError.innerText = "";
        input.classList.add("valid");
        input.classList.remove("invalid");   
    }
    }

function handleSubmit(event) {
    const inputs = [...document.getElementsByClassName("signup-input")];

    const areValid = inputs.every((input) => input.classList.contains("valid"))
    
    if(areValid === false) {
        event.preventDefault();
    }
}