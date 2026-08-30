
// Q.1

const arr1 = ["Mango", "Banana", "Apple", "Guava", "Grapes"];
console.log(arr1);

// Q.2

const arr2 = ["HTML", "CSS"];
arr2.push("JavaScript");
console.log(arr2);

// Q.3 

arr2.pop();
console.log(arr2);

// Q.4

const arr3 = ["Red", "Blue", "Green"];
arr3.shift();
console.log(arr3);

// Q.5

const arr4 = ["CSS", "JavaScript"];
arr4.unshift("HTML");
console.log(arr4);

// Q.6 

const arr5 = ["HTML", "CSS"];
arr5.push("JavaScript");
arr5.push("React");
console.log(arr5);

// Q.7 

const arr6 = ["HTML", "CSS", "JavaScript", "React"];
arr6.splice(1, 1)
console.log(arr6);

// Q.8 

const arr7 = ["HTML", "JavaScript"];
arr7.splice(1, 0, "CSS");
console.log(arr7);

// Q.9 

const arr8 = ["HTML", "CSS", "Java"];
arr8.splice(2, 1, "JavaScript");
console.log(arr8);

// Q.10 

const arr9 = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
console.log(arr9.slice(1, 4));

// Q.11 

const arr10 = ["HTML", "CSS", "JavaScript", "React"];
console.log(arr10.slice(0, 4));

// Q.12

const arr11 = ["HTML", "CSS", "JavaScript", "React"];
console.log(arr11.indexOf("JavaScript"));

// Q.13 

console.log(arr11.indexOf("React"));

// Q.14 

const user = [
    {
        name : "Rahul",
        age : 20,
    },

    {
        name : "Priya",
        age : 22,
    }
];

const userName = user.find((value) => {
    return value.name === "Rahul"
})
console.log(userName);

// Q.15

const userIndex = user.findIndex((value) => {
    return value.name === "Priya"
})
console.log(userIndex);

// Q.16 

const arr12 = [1, 2, [3, 4]];
console.log(arr12.flat());

// Q.17 

const arr13 = [1, [2, [3, 4]]];
console.log(arr13.flat(Infinity));

// Q.18 

const clr = ["Red", "Purple", "Green", "White", "Yellow"];

const color = [];

clr.forEach((value) => {
    return color.push(value)
})

console.log(color);

// Q.19 

const arr14 = ["HTML", "CSS", "JavaScript"];

const programmingLanguage = [];

let i = 0;

arr14.forEach((value) => {
    return programmingLanguage.push(i++,value)
})

console.log(programmingLanguage);

// Q.20 

const arr15 = ["HTML", "CSS", "JavaScript"];
arr15.push("React");
arr15.shift();
console.log(arr15);





