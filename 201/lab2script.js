"use strict";

let alias = prompt("What is your name?");
let greeting_text="Hello "+alias+"!";
console.log(greeting_text);

window.onload = function() {
    greeting();
    function greeting() {
        document.getElementById("greeting").innerHTML=greeting_text+" Welcome to my page!";
    };
}

function question() {
let int_mess ="";
// question 1
let book = prompt("Have you read all the Harry Potter books?");
let book_convert = book.toLowerCase();
while (!((book_convert == "yes")||(book_convert == "y")||(book_convert == "no")||(book_convert == "n"))) {
    book = prompt("Invalid answer. Have you read all the Harry Potter books?");
    console.log("Invalid answer! The accepted one are yes/y or no/n");
    book_convert = book.toLowerCase();
}
alert("Your answer is "+book)
if ((book_convert == "yes")||(book_convert == "y")) {
    int_mess = "I have read all the Harry Potter books as well. It is one of my favorite book series! "
} else {
    int_mess = "What a pity! You should give the series a try. It is not a best seller for no reason. "
}

// question 2
let game = prompt("Do you like video games?");
let game_convert = game.toLowerCase();
while (!((game_convert == "yes")||(game_convert == "y")||(game_convert == "no")||(game_convert == "n"))) {
    game = prompt("Invalid answer. Do you like video games?");
    console.log("Invalid answer! The accepted one are yes/y or no/n");
    game_convert = game.toLowerCase();
}
alert("Your answer is "+game)
if ((game_convert == "yes")||(game_convert == "y")) {
    int_mess += "I rarely play video games. But my favorite game of all time is Mario Party. "
} else {
    int_mess += "Me too! I rarely play video games. "
}

//question 3
let travel = prompt("Have you ever gone camping?");
let travel_convert = travel.toLowerCase();
while (!((travel_convert == "yes")||(travel_convert == "y")||(travel_convert == "no")||(travel_convert == "n"))) {
    travel = prompt("Invalid answer. Have you ever gone camping?");
    console.log("Invalid answer! The accepted one are yes/y or no/n");
    travel_convert = travel.toLowerCase();
}
alert("Your answer is "+travel)
if ((travel_convert == "yes")||(travel_convert == "y")) {
    int_mess += "I see that you went camping before. Do you like it? Rocky Mountain is my favorite to go camping and hiking. "
} else {
    int_mess += "You should go camping and hiking sometime. It is really relaxing. "
}

//question 4
let trick = prompt("Can you whistle?");
let trick_convert = trick.toLowerCase();
while (!((trick_convert == "yes")||(trick_convert == "y")||(trick_convert == "no")||(trick_convert == "n"))) {
    trick = prompt("Invalid answer. Can you whistle?");
    console.log("Invalid answer! The accepted one are yes/y or no/n");
    trick_convert = trick.toLowerCase();
}
alert("Your answer is "+trick)
if ((trick_convert == "yes")||(trick_convert == "y")) {
    int_mess += "I am jelous. I cannot whistle. "
} else {
    int_mess += "I cannot whistle as well.  "
}

let park = prompt("Have you ever been to Disneyland");
let park_convert = park.toLowerCase();
while (!((park_convert == "yes")||(park_convert == "y")||(park_convert == "no")||(park_convert == "n"))) {
    park = prompt("Invalid answer. Have you ever been to Disneyland?");
    console.log("Invalid answer! The accepted one are yes/y or no/n");
    park_convert = park.toLowerCase();
}
alert("Your answer is "+park)
if ((park_convert == "yes")||(park_convert == "y")) {
    int_mess += "I really enjoyed my time at Disneyland. Hope you like your trip as well. "
} else {
    int_mess += "You give Disneyland a try. It is fun to be there. Eventhough the line is frustrated sometime. "
}

document.getElementById("message").innerHTML = int_mess;
document.getElementById("q_button").disable = true;
}
