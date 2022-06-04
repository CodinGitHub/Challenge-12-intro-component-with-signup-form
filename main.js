const firstName = document.querySelector('#firstNameInput');
const lastName = document.querySelector('#lastNameInput');
const emailAddress = document.querySelector('#emailInput');
const password = document.querySelector('#passInput');

const button = document.querySelector('#button');

button.addEventListener('click', (event)=>{
    event.preventDefault();
    validateEmpty(firstName.value, firstName, firstNameError, 'First Name');
    validateEmpty(lastName.value, lastName, lastNameError, 'Last Name');
    validateEmail(emailAddress.value, emailAddress);
    validateEmpty(password.value, password, passError, 'Password');
});

function validateEmpty(valueInput, divInput, divError, nameInput){
    if (valueInput.length == 0){    
        showError(`${nameInput} cannot be empty`, divError, divInput)
    }else{
        hideError(divError, divInput);
    }
}

function validateEmail(email, divInput){
    let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if(regExp.test(email)){
        hideError(emailAddressError, divInput);
    }else{
        showError('Looks like this is not an email', emailAddressError, divInput)
    }
}

function showError(error, divError, divInput){
    divInput.style.border = ' 1px solid red';
    divError.innerHTML = `<img class="icon-error" src="./images/icon-error.svg" alt="">
    <p class="error">${error}</p>`;
}

function hideError(divError, divInput){
    divError.innerHTML = '';
    divInput.style.border = ' 1px solid hsl(246, 25%, 77%)'
}