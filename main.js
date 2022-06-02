const firstNameElement = document.getElementById('firstName');
const lastNameElement = document.getElementById('lastName');
const emailElement = document.getElementById('emailAddress');
const passElement = document.getElementById('password');

const firstNameContainer = document.querySelector('.firstName-container');
const lastNameContainer = document.querySelector('.lastName-container');
const emailContainer = document.getElementsByClassName('email-container');
const passNameContainer = document.getElementsByClassName('pass-container');

console.log(firstNameContainer)

button.addEventListener('click', (event)=>{
    event.preventDefault();
    validateEmpty(firstNameElement.value, firstNameElement, firstNameContainer, 'First Name');
    validateEmpty(lastNameElement.value, lastNameElement, lastNameContainer, 'Last Name');
    validateEmail(emailElement.value, emailElement);
    validatePassword(passElement.value, passElement);
});

function validateEmpty(value, div, container, nameInput){
    if (value.length == 0){    
        div.style.border = ' 1px solid red' 
        container.innerHTML += '';
        container.innerHTML += `<img class="icon-error" src="./images/icon-error.svg" alt="">
                      <p class="error">${nameInput} cannot be empty</p>`
    }else{
        div.style.border = ' 1px solid hsl(246, 25%, 77%)'
    }
}

function validateEmail(email, div){
    let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if(regExp.test(email)){
        div.style.border = ' 1px solid hsl(246, 25%, 77%)'
    }else{
        div.style.border = ' 1px solid red'
    }
}

function validatePassword(pass, div){
    let regExp = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/g;
    if(regExp.test(pass)){
        div.style.border = ' 1px solid hsl(246, 25%, 77%)'
    }else{
        div.style.border = ' 1px solid red'
    }
}