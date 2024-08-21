// Counter Functionality
let counterValue = 0;

const counter = document.querySelector('.counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

incrementBtn.addEventListener('click', () => {
    counterValue++;
    counter.textContent = counterValue;
});

decrementBtn.addEventListener('click', () => {
    counterValue--;
    counter.textContent = counterValue;
});

resetBtn.addEventListener('click', () => {
    counterValue = 0;
    counter.textContent = counterValue;
});

// User Info Display Functionality
const submitBtn = document.getElementById('submit');
const result = document.getElementById('result');

submitBtn.addEventListener('click', () => {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = document.getElementById('age').value;

    if (firstName && lastName && age) {
        result.textContent = `Your name is ${firstName}. Your surname is ${lastName}. Your age is ${age}.`;
    } else {
        result.textContent = "Please fill out all fields.";
    }
});
