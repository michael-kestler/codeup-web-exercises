/* Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
const name = 'Michael Kestler';
const email = 'michaal.s.kestler@gmail.com';
const languages = ['javascript', 'html', 'css'];

// TODO: rewrite the object literal using object property shorthand
users.push({
  name,
  email,
  languages
});

// TODO: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions
users.forEach((user) => {
  return emails.push(user.email);
});
users.forEach((user) => {
  return names.push(user.name);
});

// TODO: replace `var` with `let` in the following declaration
let developers = [];
users.forEach(function(user) {
  // TODO: rewrite the code below to use object destructuring assignment
  //       note that you can also use destructuring assignment in the function
  //       parameter definition
  // const name = user.name;
  // const email = user.email;
  // const languages = user.languages;

  const {name, email, languages} = user;

  // TODO: rewrite the assignment below to use template strings
  developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
});

// TODO: Use `let` for the following variable
var list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop
developers.forEach(function (developer) {

  // TODO: rewrite the assignment below to use template strings
  list += '<li>' + developer + '</li>';
});
list += '</ul>';


//let and const
// var - globally scoped
// const - block scoped --> constant, you cannot change its value
// cannot be re-assigned
//let - block scoped but you can change it
//without block scope

// if (true) {
//   let myName = 'codeup';
//   console.log('after initial assignment scope: ', myName)
//   myName = 'Michael'
//   console.log('after re-assigning inside scope: ', myName)
// }
//
// console.log(myName);
//
// function addAges(a,b){
//   if(a>b) {
//     let newAge = a + b;
//     return newAge;
//   } else {
//     let otherAge = a+20;
//     return otherAge;
//   }
// }
//
// addAges(6, 9);

// let keywords have access outward inward but not inward outward

//***** let and const are common interview question

//template literals. back tics are used to initiate template literal. wrap variable in ${} and then type as you
// would normally


// for ... of - is a new way of looping - kind of shorthand for a 'for loop'

//arrow functions - shortcut for writing functions


