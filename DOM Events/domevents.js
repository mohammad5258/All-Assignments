

// Q.1 

const btn = document.querySelector("#btn");

btn.addEventListener('click' , (e) => {
    e.stopPropagation();
    console.log("Button Clicked!");
})

// Q.2

const btn2 =  document.querySelector("#btn2");
const p1 = document.querySelector(".p1");

function greeting() {
    p1.textContent = "Thanks for visiting!";
}

btn2.addEventListener('click', greeting);

// Q.3 

const heading = document.querySelector("#heading");

heading.addEventListener('mouseover' , (e) => {heading.textContent = "Mouse is over the heading!"});

// Q.4 

const btn3 =  document.querySelector("#btn3");

btn3.addEventListener('click' , (e) => {
    console.log(e.target.tagName);
})


// Q.5 

btn3.addEventListener('mousemove' , (e) => {
    console.log(e.clientX);
    console.log(e.clientY);
});

// Q.6 

const input = document.querySelector("#text");

input.addEventListener('blur' , (e) => {
    console.log(e.target.value);
})

// Q.7

const btn4 = document.querySelector("#btn4");

function submit() {
    console.log("Button clicked!");
}
btn4.addEventListener('click' , submit);

btn4.removeEventListener('click' , submit);

// Q.8 

const btn5 = document.querySelector("#btn5");

btn5.addEventListener('click' , (e) => {
    console.log("Welcome!");
} , {once : true});

// Q.9 
const parent = document.querySelector("#parent");
const btn6 = document.querySelector("#btn6");

parent.addEventListener('click' , (e) => {
    console.log("Parent Clicked!");
    
});

btn6.addEventListener('click' , (e) => {
    e.stopPropagation();
    console.log("Button Clicked!");
});

// Q.10 

const Parent = document.querySelector("#Parent");
const child = document.querySelector("#child");

Parent.addEventListener('click' , (e) => {
    console.log("Parent Clicked!");
    
});

child.addEventListener('click' , (e) => {
    console.log("Button Clicked!");
});

// Q.11

const parent2 = document.querySelector(".parent");
const child2 = document.querySelector(".child");

parent2.addEventListener('click' , (e) => {
    console.log("Parent Clicked!");
    
} , true);

child2.addEventListener('click' , (e) => {
    console.log("Button Clicked!");
});

// Q.12

const buttons = document.querySelector("#buttons");

buttons.addEventListener('click' , (e) => {
    console.log(e.target.textContent , "button clicked.");
});

// Q.13 

const ul = document.querySelector("#skills");

function clickedItems(e) {
    console.log("You clicked : ", e.target.textContent);
}

ul.addEventListener('click' , clickedItems);






