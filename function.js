// function
// what --> task. function is a block of code that performs a specific
// why --> to avoid code repetition and to make code modular and reusable.
// how -->
//function keyword, name, parameters, body, return statement
// type of functions:
// function name (params) {} --> function declaration
function abc() {}
// let fnc = function (){} --> function expression

let fnc = function () {};
// let fnc = () => {} --> arrow function - fat arrow function
let fnc1 = () => {};

function temp_cart() {
console.log("Adding Producat");
}
temp_cart();
temp_cart();
temp_cart();

// parameters vs arguments
// parameters are the names listed in the function definition (params --> () ni andar lakheli values)
// arguments are the real values passed to the function (args function call karti () ni andar lakheli (pass) kareli values)

function cart(product_name, quantity, price) {
console.log("Product:", product_name, "Quantity:", quantity, "Price:", price);
}

cart("Laptop", 1, 50000); // arguments
cart("Phone", 2, 20000);
cart("Headphones", 3, 3000);

// convert into arrow function
// let cart = () => {}
let cart2 = (product1) => {
// product1 -- params
console.log("product:", product1);
}
cart2("Mobile"); // mobile args
cart2("Laptop");
cart2("Tablet");
// Default, rest and spread parameters in function
// default

// Default, rest and spread parameters in function
// default
function abc (v1, v2){
console.log(v1, v2);
}
abc(20, 21);
function cart3(product2="product", price="0") {
console.log(product2, price)
}
cart3(); // product price

// rest -> Jayre function ma multiple arguments pass karva to vadhare params banava pade chhe mate te na karvu pade te mate rest parameter use kariye chhiye (rest ---> jo funtion na parameter ni anadar lakhvama aave chhe)
function abcd(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10) {
console.log(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10);
}
abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function abcd1(...numbers) {
console.log(numbers);
}
abcd1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // how to handle multiple arguments

function abcd2(v1, v2, ...numbers) { console.log(v1, v2, numbers);
}
abcd2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


// retrun or early return
// retrun -> function mathi value bahar mokalva mate
function getValue1 (value) {
if (value <25) return "Value is less than 25";
else if (value < 50) return "Value is less than 50";
else if (value < 75) return "Value is less than 75";
return "Value is 75 or more";
}
let result = getValue1(80);
console.log(result);
// first Class Function
// function can be treated as variables
// function can be passed as arguments to other functions
// function can be returned from other functions


// let fnc = function(){}
// fnc(function(){}
function abc1(v1, v2){
console.log(v2);
return v1();
}
abc1(function(){
console.log("first class function")
}, "Hello")

function abc2(v1, v2){

console.log(v2);
return v1(v2);

}
abc2(function(value){
console.log("first class function", value)
}, "Hello")

// function can be returned from other function
function abc(){
return function (){
console.log("function within function")
}
}
abc()();
function abc3(){
return () => {
console.log("arrow function within function")
}
}
abc3()();

// higher order function (HOF)
// function that takes another function as an argument or returns a function as a result (eva function je return kare ek function athava acpect kare ek function params ma)
// function abcd (val) {val();}
//--> abcd(function(){console.log("hello")})
// function abcd(val){} --> higher order function
// function abcd() { return function(){} } abcd()() --> higher order function

// pure vs impure function
// pure function --> function je same input par same output aapse ane 
// koi bahar na state ne modify na kare (pure function --> je function bahar na state ne modify na kare)
let a = 20
function change_a(){
return "a not change (pure function) " + a;
} //pure function
console.log(change_a());


// impure function --> function je same input par different output aapse athava bahar na state ne modify kare (impure function --> je function bahar na state ne modify kare )
function change_a1(){
a=a+2;
return "a change (impure function) " + a;
}
console.log(change_a1());

// closure function
// function je potana parent function na variables ne access kari shake (return thava valo function use karshe parent function na koi variable) (function within function)
function outer(){
let outer_var = "Outer Function Variable";
function inner() {
console.log(outer_var);
}
inner();
}
outer();

function outer1() {
let outer_var = "new Outer Function Variable";
function inner1() {
console.log(outer_var);
let inner_var = "new Inner Function Variable";
function most_inner() {
let most_inner_var = "new Most Inner Function Variable";
function deepest_inner() {
console.log(outer_var);
console.log(inner_var);
console.log(most_inner_var);
}
deepest_inner();
}
most_inner();
}
inner1();
}
outer1();

// IIFE Immediately Invoked Function Expression
(
function () {})(); // function je declare karta j call thai jaye
(function () {
console.log("IIFE executed");
})();
// Hoisting in function
// use case --> show project structure
temp_fnc();
function temp_fnc(){
console.log("hoisting in function")
}

fnc2()();
function fnc2() {
return () => {
console.log("new arrow function within function")
}
}