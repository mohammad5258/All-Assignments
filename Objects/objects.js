
// Q.1 

const user = {
    name: "Aqib",
    email: "aqib@gmail.com",
    role: "Software developer",
};

console.log(user);

// Q.2 

const product = {
    name: "Laptop",
    price: 50000,
    category: "Electronics"
};

console.log(product.name);
console.log(product.price);

// Q.3

const users = {
    name: "Ahmed",
    email: "ahmed@gmail.com",
};

console.log(users["email"]);

// Q.4

const data = users["name"];
console.log(data);

// Q.5

const productUser = {
    name: "Mehmmod",
    role: "Student",
};

productUser["role"] = "Developer"

console.log(productUser);

//  Q.6 

users.isLoggedin = "true";
console.log(users);

// Q.7 

console.log(Object.keys(user));

// Q.8

const Product = {
    name: "Laptop",
    price: 50000,
    category: "Electronics"
};

console.log(Object.values(Product));

// Q.9 

const settings = {
    theme: "dark",
    language: "English",
    notifications: true
};

console.log(Object.entries(settings));

// Q.10 

Object.entries(users).forEach(([key, value]) => {
    console.log(key, value);
})

// Q.11 

const { name, email, role } = users;

console.log(name);
console.log(email);

// Q.12

const products = {
    name: "Laptop",
    price: 50000
};

const { name: productName, price } = products;

console.log("productName =",productName);

// Q.13

const Name = "Rahul";
const Email = "rahul@example.com";
const Role = "developer";

const proUsers = {
    Name,
    Email,
    Role,
}

console.log(proUsers);

// Q.14

function displayUser(name,email) {
       console.log(`${name}`);
       console.log(`${email}`);
}

displayUser("Rahul","rahul@example.com");

// Q.15 

const user1 = {
    name : "Rahul",
    role : "developer"
}

const newUser = {...user1};

console.log(newUser);

// Q.16 

const user2 = {
    name : "Rahul",
    role : "Student"
}

const usr = {...user2}

usr.role = "developer";

console.log(usr);

// Q.17

const frontend = ["HTML", "CSS", "JavaScript"]; 
const backend = ["Node.js", "Express"];

const technicalSkills = [...frontend,...backend];

console.log(technicalSkills);

// Q.18 

function showSkills(developerName,Skills) {
    console.log("Name :",`${developerName}`);
    console.log("Skills :", `${Skills}`);
}

showSkills("Ahmed","HTML, CSS, JavaScript");









