/*
*/

let inputs = document.querySelectorAll('input');


//Add a keyup listener on the first input field, so that once you type a letter in this field,
//it goes into the <span id="display-firstname">. 
//The content of the field and the span should always remain the same.
let firstName = inputs[0];
let displayedName = document.querySelector('#display-firstname');
firstName.addEventListener('keyup', (e) =>
    displayedName.textContent = e.target.value
);

//Add a keyup listener on the second input (the number input), so that 
//if the age is below 18 the content of the section a-hard-truth remains hidden, 
//otherwise show them this hard to swallow fact.
let age = inputs[1];
let hardTruth = document.querySelector('#a-hard-truth');
age.addEventListener('keyup', (e) => {
    if ((e.code == "Enter") && (e.target.value < 18)) {
        hardTruth.style.visibility = "visible";
    }
    else {
        hardTruth.style.visibility = "hidden";
    }
});

//Add a keyup listener on both fields and show a visual hint if the password is too short
// (less than 6 characters) or if the password and its confirmation do not match.
const getRed = (e)  => {
    if ((e.key == "Enter") && (e.target.value.length < 6)){
        e.target.style.backgroundColor = "red";
    } else {
        e.target.style.backgroundColor = "white";
    }
}

let password1 = inputs[2];
let password2 = inputs[3];
password1.addEventListener('keyup', getRed);
password1.addEventListener('keyup', (e) => {
    getRed(e);

});