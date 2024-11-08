console.log("assignment2.js");
// Convert Celsius to Fahrenheit


function temperatureCelsius() {
    let celsius =  prompt("Enter the Celsius");

    let result= (celsius * 9/5) + 32;

    document.getElementById("list").innerHTML+= `<p> ${celsius}C =  ${result}F </p>`;
}


