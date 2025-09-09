const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChar = [ "%","*","/","-","+","="];
let output = "";

// Define function to calc based on button clicked.
const calculate = (btnValue) => {
    display.focus();
    if (btnValue === "=" && output !== "") {
        // if output has '%' , replace with '/100' before evaluation
        output  = eval(output.replace("%","/100"));
    }else if (btnValue === "AC") {
        output = ""; 
    }else if (btnValue === "DEL") {
        // if del btn is clicked remove the last character from the output.
        output = output.toString().slice(0, -1);
    }else{
        // if output is empty and button is character specailchar the return
        if( output === "" && specialChar.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
}

// Add event listner to button , call calculate() on click.
buttons.forEach((button) => {
    // Btn click+ listner calls calculate() with dataset value as agrument
    button.addEventListener("click", (e) => calculate(e.target.dataset.value))
});