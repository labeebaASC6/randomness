//////////////////////
// GLOBAL VARIABLES //
//////////////////////
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const foods = [
    "pizza",
    "burgers",
    "rice and beans",
    "lasagna",
    "macaroni and cheese",
    "baked potatoes"
];
const students = [
    "Bob",
    "Martin",
    "Danny",
    "Mahdi",
    "Harry",
    "Sean",
    "Robert"
];
/////////////////////////////
// END OF GLOBAL VARIABLES //
/////////////////////////////


//actual code:

function randomNumber()
{
    let num = Math.floor(Math.random() * 22);
    return num;
}
function randomLetter()
{
    let i = Math.floor(Math.random() * alphabet.length);
    let strLetter = alphabet.charAt(i);
    return strLetter;
}
function randomFood()
{
    let str = foods[  Math.floor(Math.random() * foods.length)  ];       //local var so no need to worry about redifinition
    return str;
}
function randomStudent()
{
    let str = students[  Math.floor(Math.random() * students.length)  ]
    return str;
}
function randomGroup()
{
    let str01 = [];
    for (let i = 0; i < 3; i++)
    {
        let varSoThatIDontDoStupidThings = students[Math.floor(Math.random() * students.length)]
        str01.push(" " + varSoThatIDontDoStupidThings);
    }
    let str02 = str01.toString();                    /*str01[0] + " " + str01[1] + " " + str01[2]*/
    return str02;
}

console.log("Random number: " + randomNumber()
            + "\nRandom letter: " + randomLetter()
            + "\nRandom food: " + randomFood()
            + "\nRandom student" + randomStudent()
            + "\nRandom group: " + randomGroup()
);