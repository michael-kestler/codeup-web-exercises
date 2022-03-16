// TODO: write a conditional that prints "hey, she's my instructor" to the
//  console if the name provided is "Laura", but if the name provided
//  is "Kenneth", print out "oh, he's my instructor too!", if the name
//  is neither Laura nor Kenneth, print out "um I don't know them"


function instructorName(name){
    if (name === "Laura"){
        console.log("hey she's my instructor");
    }
    else if (name === "Kenneth"){
        console.log("he's my instrucotr too!");
    }
    else {
        console.log("um I don't know them");
    }
}
instructorName("michael");