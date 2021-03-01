alert("Welcome to InterTrain. Please enter your detalils to check your ticket final price. Thank you.");

var kilometers = Number(prompt("How many km you need to travel?"));
//parseFloat
var age = Number(prompt("How old are you?"));
//parseInt
var price = 0.21;

var final = kilometers * price;

// console.log(final);
//
// alert("Your Final Ticket price is " + final + "€");

console.log(age, kilometers);

if (isNaN(age)) {
  alert("ERROR! Please correct your age.");
} else if (age < 18) {
  finalPrice = Math.ceil((final - ((final * 20) /100)));
} else if (age > 65) {
  finalPrice = Math.ceil((final - ((final * 40) /100)));
} else {
  finalPrice = Math.ceil(final) ;
}

document.getElementById('intertrain') .innerHTML = "Your Final Ticket price is " + finalPrice + "€";
