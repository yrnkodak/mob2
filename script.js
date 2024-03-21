// Define the function to be executed when any button is clicked
function handleClick() {
    alert("Item added contact us for delivery!");
}

// Select all buttons using querySelectorAll
var buttons = document.querySelectorAll("button");

// Loop through all buttons and attach the event listener to each
buttons.forEach(function(button) {
    button.addEventListener("click", handleClick);
});
