/*
Write a JS code to return an array of only the  Even numbers from the  given array
example input: [12,2,3,4,5,6,7,8,9]
expected output: [2,2,4,6,8]
*/

let input = [12, 2, 3, 4, 5, 6, 7, 8, 9]

function returnEven(array){
    return array.filter(array => array % 2 === 0);
}

returnEven(input);