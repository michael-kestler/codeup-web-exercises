const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const threeLanguages = users.filter(user => user.languages.length >= 3)
//
//
console.log(threeLanguages);

// const threeLanguages = users.languages.filter(function(n) {
//     return n.index >= 3;
// });
// console.log(threeLanguages);

// console.log(users);


const userEmail = users.map(function(n) {
    return n.email;
});
console.log(userEmail);


const totalExperience = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
}, 0);

console.log(totalExperience);





const longestEmail = users.reduce((a, b) => {
    return a.email.length > b.email.length ? a : b; });

console.log(longestEmail)



// const longestEmail = (users) => users.reduce((user, elength) => (elength.length > user.email.length ? elength : user),
//    '',
// );
//
// console.log(longestEmail(users.email))

//

// function addNumbers(a,b){
//     return a+b;
// }
//
// addNumbers(8,10);
//
// function multiplyResults(num1, num2){
//     return num1 * num2
// }
//
// multiplyResults(addNumbers(8, 10))
//
//
// function multiplyResults(){}
//
// //filter loops through array and takes a conditional and returns filtered compy of the array
//
// //what's the difference between map and foreach - interview question