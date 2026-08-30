
// Q.1 

const randomNumber = Math.random();
console.log(randomNumber);

// Q.2 

const wholeNumber = Math.random() * (10 - 1 + 1) + 1;
console.log(Math.floor(wholeNumber));

// Q.3

const roundNumber = Math.round(4.6);
console.log(roundNumber);

// Q.4

const floor = Math.floor(7.3);
const ceil = Math.ceil(7.3);
console.log("Floor =",floor,"Ceil =", ceil);

// Q.5

const abs = Math.abs(-25);
console.log(abs);

// Q.6

const power = Math.pow(2, 3);
const sqrt = Math.sqrt(64);
console.log("Power =",power ,"Square Root =",sqrt);

// Q.7 

const minimum = Math.min(10, 23, 35, 49, 57, 62, 78);
const maximum = Math.max(10, 23, 35, 49, 57, 62, 78);
console.log("Minimum Number =",minimum , "Maximum Number =",maximum);

// Q.8

const extractString = "JavaScript Programming";
console.log(extractString.slice(0, 10));

// Q.9 

const splitString = "HTML,CSS,JavaScript";
console.log(splitString.split(","));

// Q.10

const replaceWord = "Hello World";
console.log(replaceWord.replace("World", "JavaScript"));

// Q.11

const Email =  "user@example.com";
if (Email.includes("@")) {
    console.log("Welcome, to our website");
} else {
    console.log("Input Valid Email");
};

// Q.12

const fileName = "assignment.pdf";
console.log(fileName.endsWith(".pdf"));

// Q.13

const trimString = "    Hello, JavaScript    ";
console.log(trimString.trim());

// Q.14 

const greet = "Hello, User";
console.log(greet.replace("User", "Farhan"));

// Q.15 

const number = 12.56789;
console.log(number.toFixed(2));

// Q.16 

const price = 99.5
console.log(price.toFixed(2)); 

// Q.17

const currentDate = Date();
console.log(currentDate);

// Q.18 

const dateNew = new Date("2026-01-01");
console.log(dateNew);

// Q.19

const dateNow = Date.now();
console.log(dateNow);

// Q.20 

const date1 =  Date.UTC(2026, 0, 1);
const date2 = Date.UTC(2026, 0, 2);

const finalDifference = date2 - date1;
console.log(finalDifference);





