

function printMyName() {
    console.log("Michael Kestler")
}
    function printMyAge() {
    console.log("39")
    }


printMyName();
printMyAge();

function doMathThings(){
    //code lives here
    var result = 4 * 8 * 2;
    console.log("result: ", result);
    return result
}
doMathThings();

//functions
// TODO:  write a function that takes in isColdOutside and returns a
//  string that says "you'll need a jacket" if it IS cold outside.

// isColdOutside -- the variable we'll be using to verify whether
// or not to print out "you'll need a jacket // argument
// do we need parameters - yes
// what are we naming parameters
// how do we use parameter inside of a function
// pass in variable we're actually going to be using inside of our function
// - return something from function
// what's being returned? a phrase / returning a string?
// where is the string being defined? we can create a variable or
// return the string directly
// if/else --> check to see if cold outside is true, if it is, return string
// if it's false return ... ??? // exit the function

//var isColdOutside = false;
// 1. write a function
// 2. function needs parameters
// 3. call the function
// 4. pass in the arguments (isColdOutside)
// 5. inside of function: check if cold outside is equal to true else exit
// out of function

// parameter - placeholder

//function isCold(jacket) {
 //   console.log(jacket)  //false;
    //prompt ("What is outside temperature");
 //   if(jacket === true) {

  //      return "you'll need a jacket";
  //  }else{
   //     return;
//    }

//arguments - actual value that is going to get passed into function
//isCold(isColdOutside);

function addNumbers(){
   console.log(4+19);
}
addNumbers();

function addNumberExercise(){
    var result = 4 + 19;
    console.log ("solution", result)
    return result
}
addNumberExercise();

var num1 = 18;

function sumVar(param){

    console.log (param + 25);
}

sumVar(num1); //num1 is the argument
