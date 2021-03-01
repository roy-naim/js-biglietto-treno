alert("Welcome to InterTrain. Please enter your detalils to check your ticket final price. Thank you.");

var kilometers = prompt("How many km you need to travel?");

var age = parseInt(prompt("How old are you?"));

var price = 0.21;

var final = kilometers * price;

// console.log(final);
//
// alert("Your Final Ticket price is " + final + "€");

if (age < 18) {
  alert("Your Final Ticket price is " + (final - ((final * 20) /100) + "€"));
} else if (age > 65) {
  alert("Your Final Ticket price is " + (final - (final * 40) /100 + "€"))
} else {
  alert("Your Final Ticket price is " + final + "€")
}
