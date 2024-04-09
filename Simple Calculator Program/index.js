//calculator program

const display = document.getElementById("display");

function appendToDisplay(input){
    if(display.value =="Error"){
        display.value = "";
    }
    display.value += input;
}

function clearDisplay(){
    display.value= "";
}

function calculate(){
    try {
        const result = Number(eval(display.value));
        if(isNaN(result)){
            throw new Error("Error");
        }else if(!isFinite(result)){
            throw new Error("Error");
        }
        else{
            // Determine the appropriate number of decimal places based on the result
            const decimalPlaces = Math.min(5, countDecimalPlaces(result));
            if(Number.isInteger(result)) {
                display.value = result.toString(); 
            } else {
                display.value = result.toFixed(decimalPlaces); 
            }
        }
    } catch (error) {
        display.value = "Error";
    }
}

// Helper function to count the number of decimal places in a number
function countDecimalPlaces(num) {
    const str = num.toString();
    const decimalIndex = str.indexOf('.');
    return decimalIndex === -1 ? 0 : str.length - decimalIndex - 1;
}