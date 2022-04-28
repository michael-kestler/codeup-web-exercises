/*Area of a Triangle: Write a JavaScript function that accepts the 3 lengths of a triangle and outputs the triangle’s area.


FizzBuzz Activity: Print numbers 1-100. If # is divisible by 3 print Fizz. If # is divisible by 5 print Buzz. If # is divisible by both 3 and 5 print FizzBuzz.


Shuffle an array: Write a function to shuffle an array in to a completely and entirely random order.
Return a string in reverse.
// ex. reverseString('hello') === 'olleh'
// let reverseString = (str) => {
//   return //Something
// };

5.  Check if something is a palindrome or not. Return true if it is a palindrome and false if not.
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
// let isPalindrome = (str) => {
// };

6.  Write a function that filters out numbers from an array.


7.  Write a function that returns the reading status of each of the following books.
    var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];
8.  Write a function to return an array of only the Even numbers from an array with the numbers 1 through 10.

9.  Add up all numbers in an array:
    Function should return a number
Accept an array,
    Return ‘sum not available’ if array is empty
and handle non-numbers.
    example input: [1,2,3,4,5]; expected output: 15

10.  Create a function to sort the array from lowest to highest. Make sure the function accepts an array and returns an array.
// example input: [5,8,2,6,9,3,2];
// expected output: [2,2,3,5,6,8,9] // length: 7
    BONUS:
include negative numbers in the example array
remove any duplicate elements
remove any non-numbers and still sort what is left
// ex: input: [3,"b",8,5,9,true", 4,"xyz"] expected output: [3,4,5,8,9];


11.  Write a function that takes an array of objects and a string as arguments. Add a property with key ‘continent’ and value equal to the string to each of the objects. Return the new array of objects. Don’t mutate the original array.
    example input: [{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'
expected output: [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]


12.  Write a function that accepts a string and returns a map with the string’s character frequency.
//example input: ["b", "a", "n", "a", "n", "a"];
//expected output: { b: 1, a: 3, n: 2 }

13.  Create a function that takes in two string inputs.
    If the second string input is present in the first, return the first input string with the secon input string removed from it.
    If the second string input is present multiple times in the first, the second string will only be removed where it first occurs in the first string.
    If the second string input is not present in the first, return the first string as entered into the function.

14.  Write the code necessary to output the first 50 prime numbers.

15.  Write a function that takes two arrays as arguments. Merge both arrays and remove duplicate values. Sort the merged result in ascending order. Return the resulting array.

16.  Write a function that takes an array of objects as an argument. Sort the array by property b in ascending order. Return the sorted array.
// example input: [{a:1,b:2},{a:5,b:4}]
// expected output: [{a:1,b:2},{a:5,b:4}]

17.  Rewrite the following using a for loop:
var i = 20;
while (i >= 0) {
    console.log(i);
    i--;
}

18.  Write a function that takes an object (a) as argument and returns an array with all object keys.
// example input: {a:1,b:2,c:3}
// expected output: ['a','b','c']
------------------------
// example input:{j:9,i:2,x:3,z:4}
// expected output: ['j','i','x','z']
    19.  Write a function that iterates through numbers 1 and 15 and returns the numbers that are divisible by 3.
20.  Write a function that takes a Set and an array as arguments. If not already existing, add each element in the array to the Set. Return the modified Set.
// example input: new Set([1, 2, 3]), [4, 5, 6]
// expected output: new Set([1, 2, 3, 4, 5, 6 ])
// -------------------------
// example input:new Set([1, 2, 3]), [2, 3]
// expected output: new Set([1, 2, 3])
21.  List all of the primitive data types in JavaScript
22.  Write a function that takes an object as an argument. Swap the JavaScript object’s key with its values and return the resulting object;
example input: {z:'a',y:'b',x:'c',w:'d'}
expected output: {a:'z',b:'y',c:'x',d:'w'}
-------------------------
    example input:{2:'a',4:'b',6:'c',8:'d'}
expected output: {a:'2',b:'4',c:'6',d:'8'}
-------------------------
    23.  Write a function that takes an array of objects and a string as arguments. Add a property with key ‘continent’ and value equal to the string of each of the objects. Return the new array of objects. Don’t mutate the original array.
// example input: [{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'
// expected output: [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]
24.  Add ‘strawberry’ to the beginning, middle, and end of the array.
    var fruits = ["mango", "blueberries", "oranges", "banana", "papaya", "kiwi"];
25.  Write a function that takes an array (a) as an argument. Extract the first 3 elements of the array. Return the resulting array.
26.  Write an object that describes which brands own which cereals. After declaring the object:
    Add properties and values to the existing object
Re-assign 2 properties’ values */

//27 APR 2022 Warmup
// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates
//example input: new Date('2020-06-11'), new Date('2020-06-01')
// expected output: 10example input: new Date('2020-06-11'), new Date('2020-06-01')
// expected output: 10


// function daysBetween(x, y){
//
//
// }


//// Write a function that takes an array (a) and a number (b) as arguments
// // Sum up all array elements with a value greater than b
// // Return the sum
//
// example input: [1, 2, 3, 4, 5, 6, 7], 2
// expected output: 25

// function sumElements(arr, num){
//     for (let i = 0; i >= 0; i++){
//         console.log arr(i)
//     }


// }


// 28 APR 2022 Warmup

// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array

// example input: [1,2,3,4,5,6,7,8,9,10],3
// expected output: [3,6,9]

let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arr.slice (1, 4, 7));

// function newArr(arrInput, numInput){
//     for (let i = 0; i >= 0; i++){
//
//     }
//
// }


