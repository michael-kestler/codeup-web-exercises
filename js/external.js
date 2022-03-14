
console.log('Hello from external JavaScript!');
alert("Welcome to my website!");
var favoriteColor = prompt("What is your favorite color?");
alert(favoriteColor + " is my favorite color too!");

var littleMermaid = prompt("How long did you rent Little Mermaid?");
var brotherBear = prompt("How long did you rent Brother Bear?");
var hercules = prompt("How long did you rent Hercules?");
var mp = 3
var totalCost = ((littleMermaid * mp) + (brotherBear * mp) + (hercules * mp));
alert("Your total cost is $" + totalCost);

var Google = prompt("How much do you earn per hour at Google?");
var Amazon = prompt("How much do you earn per hour at Amazon?");
var Facebook = prompt("How much do you earn per hour at Facebook?");
var Ghours = prompt("How many hours did you work at Google?");
var Ahours = prompt("How many hours did you work at Amazon");
var FBhours = prompt("How many hours did you work at Facebook?");
var totalEarned = ((Google * Ghours) + (Amazon * Ahours) + (Facebook * FBhours));
alert("You earned $" + totalEarned + " this week.");

var classFull = prompt("Is there space in the class true or false?");
var conflict = prompt("Is there no scheduling conflict true or false?");
var enrolled = classFull && conflict;
alert(enrolled + " You are enrolled.");




