// Q.1
for (let i = 1; i <= 10; i++) {
    console.log(i); 
}

// Q.2 
for (let num1 = 2; num1 <= 20; num1 += 2) {
    console.log(num1);
}

// Q.3
for (let num2 = 1; num2 < 20; num2 += 2) {
     console.log(num2);
}

// Q.4
for (let num3 = 10; num3 >= 1; num3 -= 1) {
    console.log(num3);
}

// Q.5 

let total = 0;

for (let num5 = 1; num5 <= 10; num5++) {
    total += num5;
    console.log(total);
}

// Q.6 

let tb = 10;
for (let num5 = 1; num5 <= 10; num5++) {
    console.log(tb * num5);
}

// Q.7 

let num6 = 1;
while (num6 <= 10) {
    console.log(num6);
    num6++;
}

// Q.8 

let num7 = 2;
let sum = 0;

while (num7 <= 20) {
    console.log(sum += num7);
    num7 += 2;
}

// Q.9 

let num8 = 1;

while (num8 < Infinity) {

    if (num8 === 6) {
        break;
    }

    console.log(num8);
    num8++;
}

// Q.10

let num9 = 1;

while (num9 <= 10) {

    if (num9 === 5) {
        num9++;
        continue;
    }
    console.log(num9);
    num9++;

}

// Q.11 

function greetUser(name) {
    console.log(`Hello, ${name}`);
}

greetUser("Rahul");

// Q.12

function sumOf(numb1, numb2) {
    console.log(numb1 + numb2);
}

sumOf(53, 69);

// Q.13

function ORE(number) {
    if (number % 2 === 0) {
        console.log(`Even Number :`,number);
    } else {
        console.log(`Odd Number :`,number);
    }
}
ORE(10);

// Q.14 

function squareOfNumber(num10) {
    console.log(`Square Of Number :`, num10 * num10);
}
squareOfNumber(5);

// Q.15 

function greaterNumber(number1, number2) {

    if (number1 > number2) {
        console.log(`Greater Number : ${number1}`);
    } else {
        console.log(`Greater Number : ${number2}`);
    }

}
greaterNumber(55, 99);

// Q.16


function calculateTotal(price, quantity) {
    console.log("Total Price =", price * quantity);
}

calculateTotal(300, 12);

// Q.17 

function printNumbers(n) {
    for (let num10 = 1; num10 <= n; num10++) {
        console.log(num10);
    }
}
printNumbers(5);

// Q.18

function printTable(num11) {
    for (let no = 1; no <= 10; no++) {
        console.log(num11 * no);
    }
}
printTable(5);

// Q.19

function sumNumbers(num12) {

    let t = 0;
    for (num13 = 1; num13 <= num12; num13++) {
        console.log(t += num13);
    }
}
sumNumbers(5);













