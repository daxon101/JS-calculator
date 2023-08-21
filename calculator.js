// Start inputting the calculator logic here

// Selecting the keys and display so I can use them later
const numberKeys = document.querySelectorAll(".number");
const operatorKeys = document.querySelectorAll(".operation");
const submitKey = document.querySelector(".final");
const displayValue = document.querySelector(".value");
const cancelKey = document.querySelector(".cancel")

let displayString = "";

// Button to reset the display and string storage
cancelKey.addEventListener("click", (e) => {
    displayString = "";
    displayValue.innerHTML = "0";
})

// Plan is to create a string of numbers and operators displayed in the display.
// Then on clicking submit, the string will be evaluated and the result returned.


// Creating a variable to store the string of numbers and operators

numberKeys.forEach((key) => {
    key.addEventListener("click", (e) => {
        displayString += e.target.textContent
        displayValue.innerHTML = displayString
    })
})

operatorKeys.forEach((key) => {
    key.addEventListener("click", (e) => {
        if(e.target.classList.contains("mult")) {
            displayString += "*"
        } else {
            displayString += e.target.textContent
        }
        displayValue.innerHTML =displayString;
    })
})

submitKey.addEventListener("click", (e) => {
    try {
        displayValue.innerHTML = eval(displayString);
        displayString = displayValue.textContent
    } catch {
        displayValue.innerHTML = "Error!"
    }

})