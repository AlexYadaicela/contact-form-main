const radioButtons = document.querySelectorAll('input[type="button"');
const submitBtn = document.querySelector(".submit-btn button"); 


// radio button functionality
checkedRadioButton(); 
checkedConsentButton(); 

// submit form and check validity
submitBtn.addEventListener("click", () => {
    const a = validaUserName(); 
    const b = validateEmail(); 
    const c = errorRadioBtn();
    const d = validateMessage(); 
    const e = validateConsent(); 

    console.log(a + " " + b + " " + c + " " + d + " " + e); 

    if(a === true && b === true && c === true && d === true & e === true){
        const allInput = document.querySelectorAll("input"); 
        const radioBtn = document.querySelectorAll(".queryType input"); 
        const message = document.querySelector("textarea"); 
        const consentBtn = document.querySelector(".consent");

        console.log("working"); 
        
        allInput.forEach(userInput =>{
            userInput.value = ""; 
        });

        radioBtn.forEach(btn => {
            btn.ariaCurrent = "false"; 
        })

        message.value = ""; 

        consentBtn.ariaChecked = false; 

        const successState = document.querySelector(".success-state");

        window.scrollTo(0, 0); 
        if(successState.getAttribute("data-active") === "false"){
            successState.setAttribute("data-active", "true"); 
            setTimeout(() => {
                successState.setAttribute("data-active", "false");
            }, 2000);
        }
    }
}); 


function checkedRadioButton(){
    radioButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.setAttribute("aria-current", "true");  
            unchecked(btn); 
        });
    });
}

function unchecked(current){
    radioButtons.forEach(btn => {
        if(current !== btn){
            btn.setAttribute("aria-current", "false");
        }
    })
}




function validaUserName(){
    const validFName = validateFirstName(); 
    const validLName = validateLastName(); 


    return (validFName === true && validLName === true); 
}

function validateFirstName(){
    const fName = document.querySelector("#fName"); 
    const errorfName = document.querySelector("#fName + span");

    if(fName.value.length === 0 && errorfName.getAttribute("data-error") === "false"){
        errorfName.setAttribute("data-error", "true");
        return false; 
    }else if(fName.value.length > 0 && errorfName.getAttribute("data-error") === "true"){
        errorfName.setAttribute("data-error", "false");
    }

    return true; 
}

function validateLastName(){
    const lName = document.querySelector("#lName");
    const errorlName = document.querySelector("#lName + span"); 

    if(lName.value.length === 0 && errorlName.getAttribute("data-error") === "false"){
        errorlName.setAttribute("data-error", "true");
        return false; 
    }else if(lName.value.length > 0 && errorlName.getAttribute("data-error") === "true"){
        errorlName.setAttribute("data-error", "false");
    }

    return true; 
}

function validateEmail(){
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const userEmail = document.querySelector("#email"); 
    const errorMsg = document.querySelector("#email + span");
    
    
    const validEmail = reg.test(`${userEmail.value}`); 
    if(validEmail && userEmail.value.length > 0){
        errorMsg.setAttribute("data-error", "false"); 
    }else if(!validEmail || userEmail.value.length === 0){
        errorMsg.setAttribute("data-error", "true"); 
        return false; 
    }

    return true; 
}

function validateMessage(){
    const userMessage = document.querySelector("#message"); 
    const errorMsg = document.querySelector("#message + span"); 
    if(userMessage.value.length === 0){
        errorMsg.setAttribute("data-error", "true"); 
        return false; 
    }else if(userMessage.value.length > 0){
        errorMsg.setAttribute("data-error", "false"); 
    }

    return true; 


}

function validateRadioButton(){
    let counter = 0; 
    radioButtons.forEach(btn => {
        const checked = btn.getAttribute("aria-current"); 
        if(checked === "false"){
            counter++; 
        }
    })
    return counter === radioButtons.length; 
}

function errorRadioBtn(){
    const validRadio = validateRadioButton(); 
    const errorMsg = document.querySelector(".queryType .error");
    if(validRadio && errorMsg.getAttribute("data-error") === "false"){
        errorMsg.setAttribute("data-error", "true"); 
        return false; 
    }else if(!validRadio && errorMsg.getAttribute("data-error") === "true"){
        errorMsg.setAttribute("data-error", "false");
    }

    return true; 
}


function checkedConsentButton(){
    const btn = document.querySelector(".consent");
    
    btn.addEventListener("click", () => {
        const checked = btn.getAttribute("aria-checked"); 

        if(checked === "true"){
            btn.setAttribute("aria-checked", "false"); 
        }else if(checked === "false"){
            btn.setAttribute("aria-checked", "true"); 
        }
    })

}


function validateConsent(){
    const btn = document.querySelector(".consent"); 
    const checked = btn.getAttribute("aria-checked"); 

    const errorMsg = document.querySelector(".consent-btn + span");

    const errorStatus = errorMsg.getAttribute("data-error"); 
    
    if(checked === "true"){
        errorMsg.setAttribute("data-error", "false"); 
    }else if(checked === "false" && errorStatus === "false"){
        errorMsg.setAttribute("data-error", "true"); 
        return false; 
    }


    return true; 


}