

//2. Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to
// continue prompting the user if they enter invalid input.
//3. Use a loop and the continue statement to output all the odd numbers
// between 1 and 50, except for the number the user entered.
//Write the loop
// Do something that’s going to exclude even numbers
// Print out all numbers, (at this point shouldn’t have even numbers)
// Anand skip printing the number give

for (var i = 1; i <= 50; i++) {
    var input = (prompt("Please enter an odd number between 1 and 50"));
    if (input % 2 !== 0 && input <=49 && input >=1) {
        break;
    }
}
for (var i = 1; i <= 50; i++){
    var input = (prompt("Please enter an odd number between 1 and 50"));
    if (input % 2 !== 0 && input <=49 && input >=1){
        continue;
    }

    //if (i !== input){}
    //console.log(i)
}



