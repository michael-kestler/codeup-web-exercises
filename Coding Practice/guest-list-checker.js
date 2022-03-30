//create a prompt that asks person for name
//check name against names in guest list
//if name in list send alert saying welcome
//if not on list send alert saying sorry maybe next time

var guestList = ["Angela", "David", "Larry", "Leo", "Elaine"];
var guestName = prompt("What is your name?");
guestList.includes(guestName);



if (guestList.includes(guestName) === true){
    alert("Welcome to the party pal!");
}else{
    alert("Sorry pal. Maybe next time.");
}