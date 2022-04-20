// data types
//primitive data types
//numbers, strings, boolean, null, undefined
var num =18
var str = 'this is a string'
var bool = true;
var otherBoolean = false;
var un = undefined;

console.log(num, str, bool, otheBoolean, un);

str.split()

//arrays
var arr = [2, 4, 6, {a: 8, b:10}, 10];
console.log(arr.length); // 5 elements
console.log(arr[3]);
arr.push(12);
console.log(arr.length);

//objects
var myObj = {
    myName: "Laura",
    age: 31,
    city: 'San Antonio',
    isHungry: true,
    drive: function(color){
        return myObj.myName + " is driving a " + color + " car."
        //can also use this.myName
    }
}

console.log(myObj.city.split(''));
console.log(myObj.drive("blue"));


//defining variables
//const, let, var
var myName = "Laura"; //global scope
let age = 31; //similar to var. a little more specific to
// scope. goes outward in and not inward out
const isHungry = true; //is not mutable. cannot be changed

//function
//function nameOfFunction(param){
    //code block
    //return param;
//if you don't have return statement it won't return anything
//}

//operators
//

//conditional statements
// if/ if else/ switch case/ ternary

let age = 22;
if(age < 21){
    console.log("sorry no drinks for you");
} else {
    console.log('enjoy your drinks')
}

switch(age){
    case 21:
        console.log('enjoy your drinks')
    case 22:
        console.log('how are those drinks')
    case 19:
        console.log("sorry no drinks for you");

}
//iteration
// for loops/ while loops/  .forEach()
let myArr = [2, 4, 6, 8];
let sum = 0;
function sumAll(myArr){
    for(i = 0; i < myArr.length; i++){
        sum += myArr[i];

    }
    return sum;
}

console.log(sumAll(myArr));





// methods

//.forEach()
//.isArray()


// write a function whether or not a string (arg) is a palindrome
//how do i reverse a string?
//how do i take a string and handle only the characters?



function isPalindrome(str){
    var revStr = str.split('').reverse().join('');
    console.log(revStr);



        if(str == revStr){
        return true;
    }else{
        return false;
    }
}
isPalindrome('kayak')


let faveNum = window.prompt("enter your favorite number");
console.log(faveNum);

let pass = window.prompt("what is your password");
console.log(pass);

function checkStatus(password){
    if(password == "secretPassword") {
        window.alert('You are in!!')

    } else {
            window.alert("sorry wrong password")
        }
}

// setInterval(function ()
// {
//     console.log("hey Codeup")
// }, timeout: 5000)