console.log("funciton.js");

//creating the function
function multiplyThree(num){
    return num * 3;
}

//trigger/run/execute
console.log(multiplyThree(4)); //12
console.log(multiplyThree(2)); //6
console.log(multiplyThree(5)); //15

function sum() {
    console.log(3+3)
}
sum();


let sum2 = function(){
    console.log(3+3);
}
sum2();

let total = 0

function addCart(price){
    total=total+price;
    return total;
}

total = addCart(200);
console.log(total);
total = addCart(400);
console.log(total);
total = addCart(600);
console.log(total);

function calculateTaxes(total){
    return 1.11 * total;
}

console.log(calculateTaxes(total).toFixed(2));

let productName = 4;

document.write("<p>" + productName + " " + calculateTaxes(total).toFixed(2) + "</p>");

function doubleNumber(num){
    console.log(num*2);
    return num * 2;
}

doubleNumber(4);
doubleNumber(10);

function combineNames(firstName="Unknown", lastName="Unknown"){
    console.log(firstName + " " + lastName);
    return firstName + " " + lastName;
}

combineNames("Alice", "Johnson");
combineNames("Alice");
combineNames();


function convertToSeconds(mins){
    console.log(mins*60); //seconds calculation
    return mins*60;
}

convertToSeconds(1); //60
convertToSeconds(10); //600

function addProduct(){
    let prodName= prompt("Enter the product name: ");

    document.getElementById("list").innerHTML+= `<p> ${prodName} </p>`;
}