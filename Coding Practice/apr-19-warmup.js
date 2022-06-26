//Write a function that iterates through numbers 1 and 15 and returns the numbers that are divisible by 3 (hint hint hint: learn how to use a modulus)

//Write a function that takes a Set and an array as arguments. If not already existing, add each element in the array to the Set. Return the modified Set
//
// example input: new Set([1, 2, 3]), [4, 5, 6]
// expected output: new Set([1, 2, 3, 4, 5, 6 ])
// -------------------------
// example input:new Set([1, 2, 3]), [2, 3]
// expected output: new Set([1, 2, 3])
// -------------------------

function multiplesThree(){
    for(let i = 1; i<=15; i++){
        if (i % 3 === 0)
            console.log(i);
    }

}

//fizzbuzz
for (var i=1; i <= 20; i++)
{
    if (i % 15 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}
