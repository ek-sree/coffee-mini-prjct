


const form = document.getElementById('form');
const name1 = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

form.addEventListener('submit',(event)=>{
    event.preventDefault();

    checkInput();
});

function checkInput(){
    const nameValue = name1.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();

    if (nameValue === '') {
        setErrorFor(name1,'User name cannot be blank');
    }
    else{
        setSuccessFor(name1);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    }
    else if(!isEmail(emailValue)){
        setErrorFor(email,'email is not valid');
    }
    else{
        setSuccessFor(email);
    }

    if (messageValue === '') {
        setErrorFor(message, 'Message cannot be blank');
    }
    else if (messageValue.length < 10) {
        setErrorFor(message,'Message cannot be less than 10 words');
    }
    else{
        setSuccessFor(message);
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email){
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}


// const form = document.getElementById('form');
// const name1 = document.getElementById('name');
// const email = document.getElementById('email');
// const message = document.getElementById('message');

// form.addEventListener('submit', (event) => {
//     event.preventDefault();

//     checkInput();
// });

// function checkInput() {
//     const nameValue = name1.value.trim();
//     const emailValue = email.value.trim();
//     const messageValue = message.value.trim();

//     if (nameValue === '') {
//         setErrorFor(name1, 'User name cannot be blank');
//     } else {
//         setSuccessFor(name1);
//     }

//     if (emailValue === '') {
//         setErrorFor(email, 'Email cannot be blank');
//     } else if (!isEmail(emailValue)) {
//         setErrorFor(email, 'Email is not valid');
//     } else {
//         setSuccessFor(email);
//     }

//     if (messageValue === '') {
//         setErrorFor(message, 'Message cannot be blank');
//     } else if (messageValue.length < 10) {
//         setErrorFor(message, 'Message cannot be less than 10 words');
//     } else {
//         setSuccessFor(message);
//     }
// }

// function setErrorFor(input, message) {
//     const formControl = input.parentElement;
//     const small = formControl.querySelector('small');
//     small.innerText = message;
//     formControl.className = 'form-control error';
// }

// function setSuccessFor(input) {
//     const formControl = input.parentElement;
//     formControl.className = 'form-control success';
// }

// function isEmail(email) {
//     return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
// }
