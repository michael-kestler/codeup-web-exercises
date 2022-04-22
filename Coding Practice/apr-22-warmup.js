// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array

// function returnFirstThree(a){
//     for (let i = a.length; i<4; i++){
//         console.log([i])
//         return [i];
//     }
//
// };
//
// returnFirstThree();


function firstThree(a){
    var result  = a.slice(0, 3);
    return result;

}

console.log(firstThree(['Star Wars', 'Ghostbusters', 'Spaceballs', 'Roadhouse', 'Spies Like Us']));




