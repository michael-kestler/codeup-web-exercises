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

function vowelsAndConsonants1 (s) {

    const vowels = ["a", "e", "i", "o", "u"];
    //convert string to array and get rid of non alphabets as we are just interested in consonants and vowels
    const s_array = s.replace(/[^a-zA-Z]/g, '').split('');
    //pluck vowels
    const vowels_final = s_array.filter(a => vowels.includes(a.toLowerCase()));
    //pluck consonants
    const consonant_final = s_array.filter(a => !vowels.includes(a.toLowerCase()));
    //to print any vowels from a word on a new line and then consonant in the order they appear.
    return vowels_final.join('\n') + '\n' + consonant_final.join('\n');

}

console.log(vowelsAndConsonants1("Javascript"));

function vowelsAndConsonants (s){
    //convert string to an array

    //create empty arrays to fill after looping through to pull vowels and consonants
    let arr1 = [];
    let arr2 = [];
    //loop through sp array and push vowels to arr1 and consonants to arr2

    for(let i = 0; i<sp.length; i++) {
        if (sp[i] == 'a' || sp[i] == 'e' || sp[i] == 'i' || sp[i] == 'o' || sp[i] == 'u') {
            arr1.push(sp[i]);
        } else {
            arr2.push(sp[i]);
        }
    }
        //loop through arr1 and arr2 and print each letter on a new line in order
        for(let i = 0;i<arr1.length;i++){
            console.log(arr1[i]);
        }
        for(let i = 0;i<arr2.length;i++){
            console.log(arr2[i]);
        }

    }


vowelsAndConsonants("Javascript");


//another solution
function vowelsAndConsonants2(s) {
    const vowels = [],
    consonants = [];

    for(const c of s){
        if('aeiou'.includes(c)){
            vowels.push(c);
        }else{
            consonants.push(c);
        }
    }
    console.log(vowels.join("\n"));
    console.log(consonants.join("\n"));
}