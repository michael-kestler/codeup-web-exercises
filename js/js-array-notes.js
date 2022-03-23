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

names.forEach(function(dudeNames){
    console.log(dudeNames);
