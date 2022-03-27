//1 create prompt asking for dog age
var dogAge = prompt("How old is your dog?");
console.log(dogAge);
//2 create var called humanAge that takes input from prompat and returns dog age in human years
var humanAge = (dogAge -2) * 4 + 21;
console.log(humanAge);
//3 create alert that shows user result
alert("Your dog is  " + humanAge + " years old in human years.");