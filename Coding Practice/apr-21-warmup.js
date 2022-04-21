// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tipp: try not to mutate the original array

/*example input: [{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'
expected output: [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]*/


//2. How can you add “strawberry” to the beginning, middle, and end of the following array?
// var fruits = ["mango", "blueberries", "oranges", "banana", "papaya", "kiwi"];

// var japan = {
//     city: 'Tokyo',
//     country: 'Japan' };
//
// japan.continent = 'Asia';
//
// console.log(japan);

//countryArray.continent = contString

function addContinent(countryArray, contString){
    countryArray.continent = contString

}

addContinent([{ city: 'Tokyo', country: 'Japan' }], 'Asia');
