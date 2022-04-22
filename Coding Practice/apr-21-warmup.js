// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tip: try not to mutate the original array

/*example input: [{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'
expected output: [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]*/


//2. How can you add “strawberry” to the beginning, middle, and end of the following array?
// var fruits = ["mango", "blueberries", "oranges", "banana", "papaya", "kiwi"];

var japan = {
   city: 'Tokyo',
    country: 'Japan' };

japan.continent = 'Asia';

console.log(japan);

//countryArray.continent = contString

// function addContinent(countryArray, contString){
//     for(let i = countryArray;
// }
//
// addContinent([{ city: 'Tokyo', country: 'Japan' }

// shapes.forEach(function(shape) {
//     console.log('Here is a lovely shape: ' + shape + '.');
// });
//

// var countries = [{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }];
// var countriesContinents = [];
//
// for (let i = 0; i < countries.length; i++) {
//     countriesContinents.push('Asia'[i]);
// };

var japan = {
    city: 'Tokyo',
    country: 'Japan' };

japan.continent = 'Asia';

console.log(japan);



// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tip: try not to mutate the original array

/*example input: [{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'
expected output: [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]*/

//write a function that takes an array of objects and a string as arguments
function addContinent(obj, str){
console.log(obj, str);
 //     for (let i = 0; i < obj.length; i++){
 //         obj[i].continent = str;
 //          console.log(obj[i]);
 //    }
}


addContinent([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia');

// function addContinent(array, string){
//     array.forEach(function ({}){
//         [array].continent = string;
// });
// }
//
// addContinent(a, 'Asia');