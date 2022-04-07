// Write a function that accepts a string and returns a map with the strings
// character frequency.


//let exampleInput = [“b”, “a”, “n”, “a”, “n”, “a”];
// expected output: { b: 1, a: 3, n: 2 }

function charFrequency(input){
    let n = {};
    for (var i=0; i<string.length; i++){
        let character = input.charAt(i);
        if (n[character]){
            n[character]++;
        } else {
            n[character] = 1;
        }
    }
    return n;
};


