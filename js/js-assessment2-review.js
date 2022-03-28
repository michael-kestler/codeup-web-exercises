// # JavaScript Second reassessment Review
//
//
// ## Instructions
//
// 0. *Carefully* read *all* the instructions and problems before beginning your work.
//
// ## Problems
//
// 1. Create a function named `calcAge` that takes the age and return the age in days. If input is not numeric, calcAge should return false.


//1. Create a function named `calcAge` that takes the age and return the age
// in days. If input is not numeric, calcAge should return false.

function calcAge(a){
    var ageinDays = a * 365;
    if (typeof a === "number"){
        console.log(ageinDays);
    }
    else {
        console.log("not a number")
    }
}
calcAge(50);


// 2. Create a function named `increment` that takes a number as an argument,
// increments the number by +1 and returns the result. If input is not numeric,
// increment should return false.

function increment(x){
   if (typeof x === "number"){
       x++;
       return (x);
   }
    else{
        return false;
   }
}


// 3. Define a function named `isOdd` that takes in a number, return true if that
// number is odd. Return false if the number is either not a number or even.

function isOdd(x){
    if (isNaN(x)){
        return false;
    }else if (x %2 !== 0){
        return true;
    }else {
        return false;
    }
}
isOdd(7)
}



// 4. Write a function named `oddArr`. Given the array of
// var arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] return the odd numbers.

var arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function oddArr(x){
    return x.filter(element => element % 2 !==0);
}
oddArr(arry)




// 5. Define a function named `creditCard` that takes a credit card number and
// only displays the last four characters.
// The rest of the card number must be replaced by .

function creditCard(x){
    return ("************" + x.slice(-4))
    }



// 6. create a function named `AlphabetSoup` that takes a string and returns
// a string with its letters in alphabetical order. Return false if string is
// empty or null
//
//
// 7. create a function named `reverse` that takes in and reverses an array.


