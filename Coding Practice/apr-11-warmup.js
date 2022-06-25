// Write the code necessary to output the first 50 prime numbers
// Recommend starting your loop at 1 and ending your loop once you've calculated 50 primes.
// https://en.wikipedia.org/wiki/Prime_number



let i = 0;
let num = 0;

for (i = 1; i<=50; i++){
    let counter = 0;
    for (num = i-1; num>=2; num--){
        if(i%num===0){
            counter = counter + 1;
        }
    }
    if (counter === 0){
            console.log(i);
    }
}



// while
// for (let i = 1; i <= 50; i++) {
//     if (i % 1 === 0){
//         console.log(i);
//     }
// }

    // if (i % j == 0) {
    //     flag = 1;
    //     break;





