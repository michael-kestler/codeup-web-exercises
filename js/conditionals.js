"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
//1 -Create a function named analyzeColor
//2 - give the function a parameter named color
//3 - create a return variable
// 4 - create if else block
// 5 - create return message after each option
//
// function analyzeColor(color) {
//     var result;
//     if (color === "blue") {
//         result = ("Blue is the color of the Ocean.");
//     } else if (color === "Red") {
//         result = ("Red is the color of fire trucks.");
//     } else {
//         result = ("I don't know anything about " + color);
//     }
//     return result;
// }
// console.log(analyzeColor("Red"));







// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

//console.log(analyzeColor(randomColor));




/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

function analyzeColor(color) {
   var result;
    switch(color) {
        case "red":
            result = ("Red is the color of fire trucks.");
            break;
        case "blue":
            result = ("Blue is the color of the ocean.");
            break;
        default:
            result = ("I don't know that color");
    }
    return result;
}

console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var pickColor = prompt("Pick a color any color.");
alert(analyzeColor(pickColor));






/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
       //var Pct;
//function calculateTotal(luckyNbr, totalAmt) {

    //   if (luckyNbr === 0) {
    //      return totalAmt;
    //       }
    // else if (luckyNbr === 1) {
    //     return (totalAmt) - (totalAmt * .1);
    // }
    // else if (luckyNbr === 2) {
    //     //Pct = .25;
    //     return (totalAmt) - (totalAmt * .25);
    // }
    // else if (luckyNbr === 3) {
    //     //Pct = .35;
    //     return (totalAmt) - (totalAmt * .35);
    // }
    // else if (luckyNbr === 4) {
    //     //Pct = .50;
    //     return (totalAmt) - (totalAmt *.5);
    // }
    //  else{
    //      //Pct = 1;
    //     return 0;
    //     }

    //}
    //console.log(calculateTotal(5, 100));
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
//Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var totalBill = prompt("What was the total amount of your bill?");
function calculateTotal(a, b) {
    if (a === 0) {
        return b;
    } else if (a === 1) {
        return (b) - (b * .1);
    } else if (a === 2) {
        //Pct = .25;
        return (b) - (b * .25);
    } else if (a === 3) {
        //Pct = .35;
        return (b) - (b * .35);
    } else if (a === 4) {
        //Pct = .50;
        return (b) - (b * .5);
    } else {
        //Pct = 1;
        return 0;
    }
}
alert("Your lucky number is " + luckyNumber);
alert("Your price before the discount was $" + totalBill);
alert("Your price after the discount was applied is $" + (calculateTotal(luckyNumber, totalBill)));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
var typeNumber = confirm("Would you like to enter a number?");
if (typeNumber === true){
    var yourNumber = prompt("Please type number here");
} else alert("Bye Felicia!"); {
    }
    if (isNaN(yourNumber)) {
        alert("You have entered an incorrect data type. Please try again with a number.");
    }else if (parseInt(yourNumber) %  2 === 0) {
        alert("The number you entered is even.");
    } else if (parseInt(yourNumber) % 2 !== 0) {
        alert("The number you entered is odd.");
    }else{

    }
if (isNaN(yourNumber)) {
    alert("You have entered an incorrect data type. Please try again with a number.");
} else {
    alert("Your number plus one hundred = " + (parseInt(yourNumber) + 100));
}
if (isNaN(yourNumber)) {
    alert("You have entered an incorrect data type. Please try again with a number.");
}else if (yourNumber > 0){
     alert("Your number is positive.");
 } else if (yourNumber < 0){
     alert("Your number is negative.");
 } else {
 }


//  if (typeNumber === true){
//    alert
//     // }
// //     alert("The number you entered is odd");
// } else { alert ("incorrect data type");
// }
// if(typeNumber > 0){
//     alert("The number you entered is positive");
//
// } else if (typeNumber < 0){
//     alert("The number you entered is negative");
// } else if (typeNumber == 0){
//     alert("The number you entered is 0");
// }




