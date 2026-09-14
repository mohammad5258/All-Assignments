
// Q.1

const btn1 = document.querySelector("#btn1");
const message = document.querySelector("#message");

btn1.parentElement.addEventListener('submit' , (e) => {
    e.preventDefault()
    message.textContent = "Form submitted successfully!"
});

// Q.2

const btn2 = document.querySelector("#btn2") 

btn2.parentElement.addEventListener("submit" , (e) => {
    e.preventDefault();
});

// Q.3 

const email = document.querySelector("#email");

email.addEventListener('input' , (e) => {
    console.log("You entered : ", email.value);
});

// Q.4 

const programmingLanguage = document.querySelector("#pl");
const p = document.querySelector("#selected-language");

programmingLanguage.addEventListener('change' , (e) => {
    p.textContent = `Selected Language : ${e.target.value}`
});

// Q.5 

const phoneNo = document.querySelector("#a");

phoneNo.addEventListener("focus" , (e) => {
    phoneNo.classList.add("style");
});

// Q.6 

const confirmPassword = document.querySelector("#cp");
const message2 = document.querySelector("#message2");

confirmPassword.addEventListener('blur' , (e) => {
    message2.textContent = "You left the input field."
});

// Q.7 

const form = document.querySelector("#form");
const name = document.querySelector("#name2")
const error = document.querySelector("#error");


function validateName(name) { 
   if(name.value.trim().length === 0) {
    error.textContent = "Name is required";
    return false;
   }
   error.textContent = ""
   return true;
}

form.addEventListener('submit' , (event) => {
    event.preventDefault();

    const resName = validateName(name);
})

// Q.8 

const form2 = document.querySelector("#form2");
const email2 = document.querySelector("#email2");
const error2 = document.querySelector("#error2");

function validateEmail(email2) { 
   if(email2.value.trim().length === 0) {
    error2.textContent = "Email is required";
    return false;
   }
   error2.textContent = ""
   return true;
}

form2.addEventListener('submit' , (event) => {
    event.preventDefault();

    const resEmail = validateEmail(email2);
})

// Q.9

const form3 = document.querySelector("#form3");
const password2 = document.querySelector("#psd2");
const error3 = document.querySelector("#error3");

function validatePsd(password2) {
    if(password2.value.trim().length === 0) {
        error3.textContent = "Password is required";
        return false;
    }

    if(password2.value.trim().length < 6) {
        error3.textContent = "Password must be at least 6 characters.";
        return false;
    }
    error3.textContent = "";
    return true;
}

form3.addEventListener('submit' , (e) => {
    e.preventDefault();

    const resPsd = validatePsd(password2);
})

// Q.10

const myForm = document.querySelector("#myForm");
const name3 = document.querySelector("#name3");
const email3 = document.querySelector("#email3");
const psd3 = document.querySelector("#psd3");
const errorMessage = document.querySelector(".er-msg");
const h2 = document.querySelector("#account-created");

function showError(input, errorMessage) {
    input.parentElement.querySelector(".er-msg").textContent = errorMessage ;
};

function clearError(input) {
    input.parentElement.querySelector(".er-msg").textContent = "" ;
};

function validateUsername(name3) {

    if(name3.value.trim().length === 0) {
        showError(name3 , "Username is required");
        return false;
    };
    
    if(name3.value.trim().length < 3) {
        showError(name3 , "Username must be atleast of 3 characters");
        return false;
    };
    clearError(name3);
    return true;
};

function validateUseremail(email3) {

    if(email3.value.trim().length === 0) {
        showError(email3, "Email is required");
        return false;
    };
    clearError(email3);
    return true;
};

function validatePassword(psd3) {

    if(psd3.value.trim().length === 0) {
        showError(psd3 , "Password is required");
        return false;
    };
    if(psd3.value.trim().length < 8) {
        showError(psd3 , "password is must be atleast of 8 characters");
        return false;
    };
    clearError(psd3);
    return true;
}

myForm.addEventListener('submit' , (e) => {
    e.preventDefault();

    const isValidUsername = validateUsername(name3);
    const isValidUseremail = validateUseremail(email3);
    const isValisPassword = validatePassword(psd3);

    if(isValidUsername && isValidUseremail && isValisPassword) {
        h2.textContent = "Your Account Created Successfully"
    }
})









