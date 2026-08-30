
// Q.1 

let arr = ["laptop", "mobile", "headphones"];

let uppercaseArr = arr.map((value) => {
    return value.toUpperCase()
})

console.log(uppercaseArr);

// Q.2

const price = [100, 250, 500];

const addSymbol = price.map((value) => {
    return "₹" + value;
})

console.log(addSymbol);

// Q.3 

const user = [
    { name: "Rahul", email: "rahul@example.com" },
    { name: "Priya", email: "priya@example.com" }
];

const userName = user.map((value) => {
    return value.name;
})

console.log(userName);

// Q.4 

const Price = [100, 200, 300];

const updatedPrice = Price.map((value) => {
    return value + value * 10 / 100;
})

console.log(updatedPrice);

// Q.5 

const User = [
    { name: "Rahul", role: "student" },
    { name: "Priya", role: "student" }
];

const updatedData = User.map((value) => {
    return { ...value, role: value.role = "developer" }
})

console.log(updatedData);

// Q.6 

const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 }
];

const stock = products.map((product) => {
    return { ...product, inStock: true }
})

console.log(stock);

// Q.7 

const frontend = ["HTML", "CSS", "JavaScript"];

frontend.forEach((value) => {
       console.log(value);
})

// Q.8 

const arr2 = ["html", "css", "javascript"];

const uppercaseArr2 = arr2.map((value) => {
    return value.toUpperCase()

})

console.log(uppercaseArr2);

// Q.9 

const names = ["Rahul", "Priya", "Aman"];

const Names = names.map((value) => {
    return "User :" + value;
})

console.log(Names);

// Q.10 

const product2 = [
    { name: "Laptop", inStock: true },
    { name: "Mouse", inStock: false }
];

const Product2 = product2.filter((value) => {
    return value.inStock === true;
})

console.log(Product2);

// Q.11 

const user3 = [
    { name: "Rahul", role: "developer" },
    { name: "Priya", role: "student" }
];

const User3 = user3.filter((value) => {
    return value.role === "developer";
})

console.log(User3);

// Q.12 

const product3 = [
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 }
];

const Product3 = product3.filter((value) => {
    if (value.price > 1000) {
        return value;
    }
});

console.log(Product3);

// Q.13 

const user4 = [
    { name: "Rahul", isActive: true },
    { name: "Priya", isActive: false }
];

const User4 = user4.filter((value) => {
    return value.isActive === true;
});

console.log(User4);

// Q.14 

const email = ["rahul@gmail.com", "priya@yahoo.com", "aman@gmail.com"];

const Email = email.filter((value) => {
    return value.includes("@gmail.com");
});

console.log(Email);

// Q.15

const price4 = [500, 1200, 300];

let total = 0;

const totalPrice = price4.reduce((total, value) => {
    return total = total + value;
}, 0);

console.log(totalPrice);

// Q.16 

const productName = ["Laptop", "Mouse", "Keyboard"];

let totalProduct = 0;

const Quantity = productName.reduce((totalProduct, value) => {
    return totalProduct += (value === 1 || 1);
}, 0);

console.log(Quantity);

// Q.17 

const cartItem = [
    { name: "Laptop", quantity: 1 },
    { name: "Mouse", quantity: 2 }
];

let totalItem = 0;

const Cart = cartItem.reduce((totalItem, value) => {
    return totalItem = totalItem + value.quantity;
}, 0);

console.log(Cart);

// Q.18 

const order = [
    { amount: 500 },
    { amount: 1000 },
    { amount: 750 }
];

let totalAmount = 0;

const amount = order.reduce((totalAmount, value) => {
    return totalAmount += value.amount;
}, 0);

console.log(amount);

// Q.19 

const frontendTech = ["HTML", "CSS", "JavaScript"];

const frontendtech = frontendTech.reduce((acc, value) => {
    return acc = acc + value;
}, "");

console.log(frontendtech);

// Q.20

const items = [
    { name: "Mouse", price: 500, quantity: 2 },
    { name: "Keyboard", price: 1000, quantity: 1 }
];

let totalprice = 0;

const totalBill = items.reduce((totalprice, value) => {
    return totalprice = totalprice + value.price * value.quantity;
}, 0);

console.log(totalBill);