console.log("if-statement");

//---- if statement ----
// if(condition){
// code to be executed if condition is true
//}

if(3>7){
    console.log("I am inside the if statement");
}

let student1 = 45;
let student2 = 45;

if(student1 == student2) {
    console.log("Both are the same")
}

//---- if statement ----
// if(condition){
// code to be executed if condition is true
//}else{
//     code to be executed if condition is falsSe
//}

let isTrue = false;

if(isTrue){
    console.log("Yes");
}else{
    console.log("No")
}

//Challenge
// check if the age is greater than 21
// T: display "you are an adult"
// F: display  "you are an underage"

let age = 10;

if(age>21){
    console.log("you are an adult");
}else{
    console.log("you are an underage");
}

//--- if-else if-else statements ---

// if(condition){
//    code to be executed if condition is true
// }else if(conditions2){
//}else{
// cod to be executed if conditions are false
// }

age=75;

if(age<13){
    console.log("Child");
}else if(age<20){
    console.log("Teenager");
}else if(age<64){

}else{
    console.log("Senior")
}

let week = new Date().getDay();

if(week ==1){
    console.log("Mon");
}else if(week == 2){
    console.log("Tue");
}else if(week == 3){
    console.log("Wed");
}else if(week == 4){
    console.log("Thurs");
}else if(week == 4){
    console.log("Fri");
}else if(week == 5){
    console.log("Sat");
}else if(week == 6){
    console.log("Sun");
}else if(week == 7){
    console.log("Invalid");
}

//  Challenge Movie Ticket Price

function ticketCalculator(){
let age = prompt("Enter the age");
let price;
if(age<12){
    price=5;
}else if(age<18){
    price=8;
}else if(age=>18){
    price=10
}

console.log("Your ticket price is: $");
}

// Weather Outfit Challenge

function outfitSuggestion(){
    let temp = prompt("Enter the temperature");
    let outfit;
    if(temp<18){
        outfit="jacket";
    }else if(temp<25){
        outfit="sweater";
    }else if(temp>25){
        outfit="t-shirt";
    }
 // or use this
 // console.log("You should wear a" + outfit);
    document.getElementById("weatherMessage").innerHTML="You should wear a"
    document.getElementById("weather").innerHTML= outfit;
}

outfitSuggestion();