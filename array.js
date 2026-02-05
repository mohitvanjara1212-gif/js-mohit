// create
// variable_name = [values]
let arr = [1, 2, 3, 4];
console.log("unchanged old array: "+ arr);
// access
// position = [0123]
// access
// array_name [position / index]
arr[0]; 
// modify
// array_name [position] = new value
arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
arr[3] = 40;

console.log("changed new array: "+ arr);

// Array Methods:
// push, pop, shift, unshift, splice, slice, reverse, sort
// push -> enter new value into array -- place it into last
let a = [1, 2, 3, 4, 5, 6]; 
// variable || function.method --> koi variable ke function in
a.push("adding new numbers in array: "+ a);
// use case -- enter new producats into existing producats list
a.push(8, 9, 10);
console.log("adding new numbers in array: "+ a);

// pop -> remove last value into array
a.pop();
console.log("After popping last element: "+ a);

// use case --remove last producat you add Into your list by mistake
a.pop();
a.pop();
console.log("After popping two more elements: "+ a);

//shift - remove first value into Array
let c = [30, 40, 50, 60]
c.shift(); 
// use case -- remove old producat automatic after sometimes from your producat list
// let products = [
//   { id: 1, name: "Laptop" },
//   { id: 2, name: "Phone" },
//   { id: 3, name: "Tablet" },
//   { id: 4, name: "Watch" }
// ];

// const interval = setInterval(() => {
//   if (products.length === 0) {
//     clearInterval(interval);
//     console.log("No products left");
//     return;
//   }

//   const removedProduct = products.shift();
//   console.log("Removed:", removedProduct);
//   console.log("Remaining products:", products);

// }, 5000);


// unshift -- add value into array -first
let d = [52, 35, 65, 85];
d.unshift(20);
// use case -- add a value into top of that data you receive
d.unshift(20);

console.log(d);

// splice - remove value into array position and specific number of values specific
// into () -first index(position), how many value you want to remove
let e = [50, 60, 30, 40, 10];
//e.splice(3, 2);
 e.splice(3, 0, 50, 100)
console.log(e);
// use case ---- select msg and remove multiple msg at on click
// slice copy values from array --specific position and specific number of values
// new variable = array_name.slice(start index, end index)

// reverse --reverse value of array
let g = [25, 38, 35, 40, 85] ;
g.reverse();
// use case --show latest update first into your feed
g.sort();
console.log(g);
// sort -- set into ascending order
h = [50, 20, 80, 10, 40] ;
h.sort();
// let h = [11, 62, 3, 4, 25]
// let sr = h.sort(function(a, b) {
//return a b; // ascending order -
// })


// For Each Loop
// for Each --Array ni darek value mate loop chalse
let i = [10, 35, 40, 68] ;
i.forEach((val) => {
let new_val = val + 10;
console.log(new_val);
});

[5, 58, 42, "Hello"].forEach(val =>{
let new_arr = val + 2;
console.log(new_arr)
})

//.map() Method:
// map tyare j use karvu ke jyare ek new array create karvo chhe
// first map create a black array --only for understanding
let data = [10, 20, 50, 40, 15];
// same like a for each loop but map return a new array
let temp_data = data.map((val) => {
if (val > 20){
return val;
}
});

// if you want to show only electronics producat on your homepage
let marks = [10, 5, 20, 25, 15]
let final_marks = marks.map((val) =>{
if(val == 5) {
return val + 4;
}
return val;
})

// filter
// filter tyare use karvu ke jyare ek new array create karvo chhe with condition
// in return true/false
// if true --> add into new array
// if else(false) --> not add into new array
let laptops_price = [15000, 20000, 30000, 65000, 99000, 45000];
let expensive_laptops = laptops_price.filter((price) => {
if (price > 30000) return true;
});

// ex. poduct ma thi specific price na producat new array ma store karva hoy
// if you want to show only expensive producat on your homepage
// if you want to filter producat based on price
let product_type = ["Mobile", "Tablet", "Laptop", "Mouse", "Keyborad"];
let filter_product_type = product_type.filter((type) => {
if (type === "Tablet" || type === "Mobile") return true;
});

let total_price = [10, 68, 45, 58, 52, 48];
let final_price = total_price.reduce((accumulator,
val) => {
return accumulator + val;
}, 0); // intial value of accumulator
// theta + 10 =>10
// 10 + 68 =>78
// 78 + 45 =>123
console.log("Final Price:", final_price);

// find
// find tyare j use karvu ke jare array mathi ek value find karvi hoy based on condition
// find() return kare chhe array no element -> callback no return value nahi
// never returns what you return inside it
// returns the array element itself not return array
//.find() stops at the first match
// It does not continue looping

let product = ["Laptop", "Mobile", "Tablet", "Desktop", "Smart Watch"];
let find_product = product.find( (item) => {
console.log("can't find product"); // not working why??
if (item === "laptop") {
return true;
} else if (item === "Desktop") {
return true;
} else {
return "Not Found";
}
});

// some
// check kare chhe ke array ma koi pan ek item codition satisfy kare chhe ke nahi
// condition true aave tyare stop kare
// some() vs find() --> some() can't return you value its return true or false, find() return value of array
// give ans in true and false
let marks_some = [10, 20, 35, 80];
let any = marks_some.some( (val) => {
if (val > 85) return 12;
// if (val < 85) return "need improvement";
});
// use case --check if some product are out of stock in your cart
let cart = [
  { name: "Tablet", stock: 5 },
  { name: "Mobile", stock: 0 },
  { name: "Laptop", stock: 3 }
];

let anyOutOfStock = cart.some((item) => item.stock === 0);
console.log("Any product out of stock:", anyOutOfStock); // true


//every
// check kare chhe ke array ma baddha j items condition satisfy kare chhe ke nahi baha items condition match kare 
// true -
// false --ek pan fail thay to
let def = [20, 30, 40, 50];
let num = def.every(function(val){
return val < 40;
})
// use case --> check all student is pass or not
let marks_every = [55, 60, 70, 80];

let allPassed = marks_every.every((m) => m >= 35);
console.log("All students passed:", allPassed);

// true
// some(), find(), filter(), every()
// let products = ["Tablet", "Mobile", "Laptop", "Mobile"

// Destructuring oprator --give value to variable (ex. we don't use every time arr1[1], just save it into variable let [k] = arr1)
let arr4 = [1, 2, 3, 4, 5]
let[,,k] = arr4; // --> destructuring
// let [j,, k] = arr;
console.log(k);
let user_data = ["text", "text@gmail.com", "Male", "Surat"] 

// spread oprator --copy value from main array
let arr8 = [1, 2, 3, 4, 5, 6, 7];
// let arr4 = arr3; // just give reference not copy value (when you change into arr4 that will be change arr3 too)
let arr9 = [...arr8];
// ... -> rest --> into function
// ... --> spred --> into Array and Object