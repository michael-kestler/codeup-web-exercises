function getMilk(money) {
    var bottlesYouGet = Math.floor(money/1.5);
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log ("You get " + bottlesYouGet + " bottles of milk.");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
}

getMilk(11);

//1 creat input variable
//2 make function paramater amount of money you have
//3 divide money parameter by cost of bottle of milk.
//4 round down the number of bottles to whole number
//5 return the number of bottles of milk that the user can buy with the amount of
// money they have argument