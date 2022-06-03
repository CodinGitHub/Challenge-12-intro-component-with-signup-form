button.addEventListener('click', (event)=>{
    event.preventDefault();
    validateEmpty(firstName.value, firstName, firstNameError, 'First Name');
    validateEmpty(lastName.value, lastName, lastNameError, 'Last Name');
    validateEmail(emailAddress.value, emailAddress);
    validateEmpty(password.value, password, passError, 'Password');
});

function validateEmpty(value, input, divError, nameInput){
    if (value.length == 0){    
        showError(`${nameInput} cannot be empty`, divError, input)
    }else{
        hideError(divError, input);
    }
}

function validateEmail(email, div){
    let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if(regExp.test(email)){
        hideError(emailAddressError, div);
    }else{
        showError('Looks like this is not an email', emailAddressError, div)
    }
}

function showError(error, div, input){
    input.style.border = ' 1px solid red';
    div.innerHTML = `<img class="icon-error" src="./images/icon-error.svg" alt="">
    <p class="error">${error}</p>`;
}

function hideError(div, input){
    div.innerHTML = '';
    input.style.border = ' 1px solid hsl(246, 25%, 77%)'
}