// Arrays - list of elements
// what type of data can we store an array in js?

//numbers, strings, boolean, null, undefined, objects, arrays

//["element1", "element2", "element3", "element4"];

var groovyNames = ["Cory", "Moses", "Joseph", "Carlos"];
console.log(groovyNames);

//terminology
// element
// square bracket
// index
// data type

//How do we access items in an array?

console.log(groovyNames[1]);

var doggos = ["boxer", 'great dane', 'schnauzer', "husky", 'gsp']
console.log(doggos[0]);
console.log(doggos[1]);
console.log(doggos[2]);
console.log(doggos[3]);
console.log(doggos[4]);

for(var i =0; i < doggos.length; i++){
    console.log("i", i);
    console.log("my favorite kind of dog is " + doggos[i]);
}

// forEach - every item in a set of items

var grocerylist = ["bananas", "milk", "cookies", "cough syrup", "honey", "tea"];

grocerylist.forEach(function(groceryItem){
    console.log(groceryItem);

})

//1. does method affect the og array?
//2. does the method require any params?
// .foreach(function ()[])
//3. what if anything is being returned?

// array of strings
// adding to array using "push" method
// example animals.push("") - requires parameter

// control command space bar pulls up all the emojis

// you can find out what is being returned by console logging
//or you can put it in a variable

//push method adds to the end of an array
//unshift method adds to the beginning of an array
//
// shift method and pop method can be used to remove items from array
// pop method removes last element from the array
// returning a change in length
//shift method removes first element from the array and
// returns a change in length
// These methods DO change the original array

//1 changes the length of the original array
// 2  it doesn't require any args
//3 returns new length

//lastIndexOf locates element at end of the array

// sort method sorts