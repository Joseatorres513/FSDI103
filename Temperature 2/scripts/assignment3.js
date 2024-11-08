console.log("assignment3.js");
// Convert Celsius to Fahrenheit

function convertTemperature() {
    let userDegree = prompt("C for Celsius to Fahrenheit or F for Fahrenheit to Celsius")

    if(userDegree == "C"){
        let celsius = prompt("Introduce a number to Convert to Fahrenheit");
        
        let result= (celsius * 9/5) + 32;

        document.getElementById("weather").innerHTML=result.toFixed(1) + "F";

        outfitSuggestion(result);

    }else if(userDegree == "F") {
        let fahreheit = prompt("Introduce a number to convert to Celsius");

        let result= (fahreheit - 32) * 5/9;
        
        document.getElementById("weather").innerHTML=result.toFixed(1) + "C";

        outfitSuggestion(result);
    }else {
        document.getElementById("weatherMessage").innerHTML="Choose C or F"
    }
}
// Weather Outfit Challenge

function outfitSuggestion(result){
    let outfit;

    if(result<18){
        outfit="jacket";

        document.getElementById("weather").classList.remove("thermometer-red");

        document.getElementById("weather").classList.add("thermometer-blue");

    }else if(result<25){
        outfit="sweater";

    }else if(result>25){
        outfit="t-shirt";

        document.getElementById("weather").classList.remove("thermometer-blue");

        document.getElementById("weather").classList.add("thermometer-red");
    }

    document.getElementById("weatherMessage").innerHTML="You should wear a"

    document.getElementById("clothingResult").innerHTML= outfit;
}

// function redBlue(result)

// outfitSuggestion();
