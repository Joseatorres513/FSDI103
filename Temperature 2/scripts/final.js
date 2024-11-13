console.log("final.js");

// Get the values with prompt
let startpoint=prompt("Enter starting temperature");
let endpoint=prompt("Enter ending temperature");
let scale=prompt("Enter scale");

// Get elementbyID
document.getElementById("startTemp").value=startpoint;
document.getElementById("endTemp").value=endpoint;
document.getElementById("scale").value=scale;

function convertTemperatureRange() {
    // Get input values
    const startValue = parseFloat(document.getElementById("startTemp").value);
    const endValue = parseFloat(document.getElementById("endTemp").value);
    const scale = document.getElementById("scale").value.trim().toUpperCase();
    
    // Get the output div to display results
    const outputDiv = document.getElementById("output");
    
    // Clear any previous output
    outputDiv.innerHTML = '';
    
    // Loop through temperatures and convert
    for (let temp = startValue; temp <= endValue; temp++) {
        let convertedTemp;
        let resultText;
        
        if (scale === "C") {
            // Convert Celsius to Fahrenheit
            convertedTemp = (temp * 9 / 5) + 32;
            resultText = `${temp}°C is ${convertedTemp.toFixed(2)}°F`;
        } else if (scale === "F") {
            // Convert Fahrenheit to Celsius
            convertedTemp = (temp - 32) * 5 / 9;
            resultText = `${temp}°F is ${convertedTemp.toFixed(2)}°C`;
        }
        
        // Display the result
        const p = document.createElement("p");
        p.textContent = resultText;
        outputDiv.appendChild(p);
    }
}
