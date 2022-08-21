import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form');
const emailInput = document.querySelector('[name="email"]');
const messageInput = document.querySelector('[name="message"]');


formEl.addEventListener('submit', throttle(formSubmitHandle, 1000));
emailInput.addEventListener('input', throttle(onInput, 500));
messageInput.addEventListener('input', throttle(onInput, 500));

const enteredData ={
}

retrievingDataStorage()

function formSubmitHandle(event){
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => {
    console.log(name,':',value );
    localStorage.removeItem('feedback-form-state')
    formEl.reset();    
    });
};



function onInput(event){
    const inputText = event.target.value;
    console.log(inputText);
    enteredData.email = emailInput.value;
    enteredData.massege = messageInput.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(enteredData));
};


function retrievingDataStorage() {
    const savedText = JSON.parse(localStorage.getItem('feedback-form-state'));
    console.log(savedText);
    if(savedText){
        emailInput.value = savedText.email
        messageInput.value = savedText.massege
    };
    
};