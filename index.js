// calc brain

const display = document.getElementById("display");

// Adds whatever key is pressed to the display
function appendToDisplay(input){
    display.value += input;
}

// To clear display
function clearDisplay() {
  display.value = "";
}

// Simple calculation using Eval() and error handling included.
function calculate(){
    try {
        display.value = eval(display.value);
    }

    catch(error)
    {
        display.value = "Error" ;
    }
}