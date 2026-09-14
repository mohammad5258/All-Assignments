
const body = document.querySelector("body")

// Q.1

const Title = document.getElementById("title");

const updatedTitle = Title.textContent = "Hello JavaScript";

console.log(updatedTitle);

// Q.2 

const description = document.querySelector(".description");

const updatedDescription = description.textContent = "New Description" ;

console.log(updatedDescription);

// Q.3 

const items = document.querySelectorAll(".item");

items[0].setAttribute('style' , 'color : blue');
items[1].setAttribute('style' , 'color : blue');
items[2].setAttribute('style' , 'color : blue');

// Q.4

const oldMessage = document.querySelector("#message");
const newMessage = oldMessage.textContent = "Welcome to JavaScript!";

console.log(newMessage);

// Q.5 

const container = document.querySelector(".container")

const h2 = document.createElement("h2");
const p = document.createElement("p");

h2.textContent = "My website";
p.textContent = "Welcome to my website!";

container.append(h2 , p);

console.log(container);

// Q.6 

const image = document.querySelector("#profileImage");

image.setAttribute('src' , 'new.jpg');
image.setAttribute('alt' , 'New image');

// Q.7 

const btn = document.querySelector("#btn");

btn.classList.add("add");
btn.classList.remove("add");

// Q.8 

const heading = document.querySelector("#heading");

heading.setAttribute('style' , 'color : aliceblue; background-color : cyan; font-size : 20px')

// Q.9

const ButtonId = document.querySelector("#productBtn");

console.log(ButtonId.dataset.Id);

// Q.10

const paragraph = document.createElement("p");

paragraph.textContent = "This paragraph was created using JavaScript."

body.appendChild(paragraph);

// Q.11

const ul = document.querySelector("#skills");

const li = document.createElement("li");

li.textContent = "HTML, CSS, JavaScript";

ul.appendChild(li);


// Q.12

const ol = document.querySelector("#frontend")

const listAddHTML = document.createElement("li");
const listAddReact = document.createElement("li");

listAddHTML.textContent = "HTML";
listAddReact.textContent = "React";

ol.prepend(listAddHTML);
ol.append(listAddReact);

// Q.13 

const Frontend = document.querySelector("#frontend-technologies");

const listAddCSS = document.createElement("li");

let technologies = Frontend.children

listAddCSS.textContent = "CSS";

Frontend.insertBefore(listAddCSS , technologies[1] );

// Q.14 

const list = document.querySelector("#frontend-skills");

const skillRemove = list.children;

list.removeChild(skillRemove[1]);

// Q.15

const clone = document.querySelector("#clone")

const btn2 = document.querySelector("#btn2");

let btn2Clone = btn2.cloneNode();

btn2Clone.textContent = "Click Me"

clone.append(btn2Clone);



