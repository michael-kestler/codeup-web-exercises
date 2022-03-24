

//2. Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to
// continue prompting the user if they enter invalid input.

do {
    var userInput = prompt("Enter an odd number between 1 and 50.");
} while (userInput % 2 === 0 || userInput < 1 || userInput > 50 || isNaN(userInput));

for (var i = 1; i <= 50; i++) {
    if (i == userInput) {
        break;
    }else {
    }
}




// for (var i = 1; i <= 50; i++) {
//     var input = (prompt("Please enter an odd number between 1 and 50"));
//     if (input % 2 !== 0 && input <=49 && input >=1) {
//         break;
//     }
// }
// //Write the loop
// for (var i = 1; i <= 50; i++){
//     var input = (prompt("Please enter an odd number between 1 and 50"));
//     if (input % 2 === 0 && input <=49 && input >=1){
//         continue;
//         } else if (input % 2 !== 0 && input <=49 && input >=1) {
//         input = input + i; }
//     }
//         console.log(input);
//     //if (i !== input){}
//     //console.log(i)

//var input = prompt("Please enter an odd number between 1 and 50");
//3. Use a loop and the continue statement to output all the odd numbers
// between 1 and 50, except for the number the user entered.

//create a function?
//Write the loop
// Do something that’s going to exclude even numbers
// Print out all numbers, (at this point shouldn’t have even numbers)
// And skip printing the number given

do {
    var userInput = prompt("Enter an odd number between 1 and 50.");
} while (userInput % 2 === 0 || userInput < 1 || userInput > 50 || isNaN(userInput));

for (var i = 1; i <= 50; i++) {
    if (i == userInput) {
        console.log("Yikes! Skipping number: " + userInput);
    } else if (i % 2 !== 0) {
        console.log("This is an odd number: " + i);git
    } else {
        continue;
    }
}

