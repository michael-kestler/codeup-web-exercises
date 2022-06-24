//how to add up all numbers in an array

var numbers = [10, 20, 30, 40];
var sum = 0;

for ( var i = 0; i < numbers.length; i++){
    sum += numbers[i];
}

console.log(sum);