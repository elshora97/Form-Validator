const form = document.getElementById ('form');
const username = document.getElementById ('username');
const email = document.getElementById ('email');
const password = document.getElementById ('password');
const password2 = document.getElementById ('password2');


//show input error message

function showError (input,message){
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control error';
    const small = formcontrol.querySelector('small');
    small.innerHTML = message; 
}

//show success outline

function showSuccess (input) {
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control success';
}

//email is valid

// function isValidEmail (email) {
//     return String(email)
//     .toLowerCase()
//     .match(
//         /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );
// }

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;

    if (re.test(input.value.trim())) {
        showSuccess (input);
    }else {
        showError (input , 'Email is not valid');
    }
}


//check required function

function checkRequired(inputArr) {
    inputArr.forEach(function(input){
        if (input.value.trim() === '') {
            showError (input, `${getFieldName(input)}  is required`);
        }else {
            showSuccess(input);
        }
    });
}

//check length func.

function checkLength (input, min , max) {
    if (input.value.length < min) {
        showError (input , `${getFieldName(input)} must be at least ${min} characters`);
    }else if (input.value.length > max) {
        showError (input , `${getFieldName(input)} must be less than ${max} characters`);
    }else {
        showSuccess(input);
    }
}

function checkPasswordMatch(input1,input2){
    if (input1.value != input2.value) {
        showError (input2, 'passwords do not match');
    }
}

//Get field Name Func.

function getFieldName (input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event listeners

form.addEventListener('submit', function(e){
    e.preventDefault();

/********************************** if statments *****************************************/
    // if(username.value === '') {
    //     showError(username, 'username is required');

    // }else {
    //     showSuccess(username);
    // }


    // if(email.value === '') {
    //     showError(email, 'Email is required');

    // }else if(!isValidEmail(email.value)) {
    //     showError(email, 'Email is not valid');

    // }else {
    //     showSuccess(email);
    // }

    // if(password.value === '') {
    //     showError(password, 'password is required');

    // }else {
    //     showSuccess(password);
    // }

    // if(password2.value === '') {
    //     showError(password2, 'password2 is required');

    // }else {
    //     showSuccess(password2);
    // }

    checkRequired ([username,email,password,password2]);
    checkLength (username, 3, 15);
    checkLength (password, 10, 25);
    checkEmail (email);
    checkPasswordMatch(password,password2);
})