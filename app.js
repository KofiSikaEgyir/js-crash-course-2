//LOGICAL OPERATOR


let num1 = 10;
let num2 = 20;
let num3 = "10";
let word1 = "Hello"
let word2 = "hello"
console.log(num1 < num2);
 console.log(num1 > num2);
 console.log(num1 <= num2);
 console.log(num1 >= num2);
 console.log(!true);
 console.log(!false);
console.log(num1 === num3); // Equality check
console.log(num1 == num3);
console.log(word1 === word2);
console.log(word1 !== word2);


//CONTROL FLOW
let items = "Annapurna";
let item = "";
if(item === "Annapurna") {
    console.log("Buy Annapurna");
} else if (item === "U2") {
    console.log("Buy U2");
} else if (item === "A1") {
    console.log("Buy A1");
}else {
    console.log("Buy Rocky Salt");
}

// GRADING SYSTEM
let score = 100;
if (score >= 0 && score <= 100) {
console.log("Excellent");
} else if (score >= 80) {
    console.log("Very Good");
} else if (score >= 70) {
    console.log("Good");
} else if (score >= 60) {
    console.log("Average");
} else if (score >= 50) {
    console.log("Credit");
} else if (score >=40 ){
    console.log("Pass");
} else if (score >= 0) {
    console.log("Fail");
} else{
    console.log("Please enter a valid score");
}

//FUNCTION
function sum(x, y) {
    let total = x + y;
    return total;
}

function multiply(x, y) {
    let total = x * y;
    return total;
}

//LOOP

// //for loop
for (let i = 1; i <= 100; i++){
    console.log(i + ".I will not talk in class again");
}

//while loop
let num = 1;
while(num <= 10){
    console.log(num + ". my name is philip");
    num = num + 1;
}

//do... while loop
let age = 1;
do {
    console.log("You can't vote");
    age++;
}while (age < 18);

// Array Methods (In works with objects)
let ages= [18, 32, 45, 44, 27, 67, 21];
 for(let age of ages){
     console.log(Math.pow(age, 2));
}

let marriages=ages.filter((num)=> num>40)
console.log(marriages);

let marriage =ages.filter(function(num){
    return num ==18
})


// map
let squares= ages.map((age)=> age*age);
console.log(squares)

// find
let eiighteen = ages.find((age) => age === 18);
console.log(eiighteen);