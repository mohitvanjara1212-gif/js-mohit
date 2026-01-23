// Example 1 :
let x = 10;
let y = 20;
if (x > 5 && y > 5) {
    console.log("Both are greater than 5");
} else {
    console.log("One or both are not greater than 5");
}
// Output: Both are greater than 5
// Why: Both x (10) and y (20) are greater than 5, so && condition is true

// Example 2 :
let isAdmin = false;
let isLoggedIn = false;
if (isAdmin || isLoggedIn) {
    console.log("Access granted");
} else {
    console.log("Access Denied");
}
// Output: Access Denied
// Why: OR (||) needs at least one true, but both values are false

// Example 3 :
let temp = 35;
if (temp > 30) {
    console.log("Hot day");
} else {
    console.log("Pleasant day");
}
// Output: Hot day
// Why: 35 is greater than 30, so the if block runs

// Example 4 :
let a1 = 0;
if (a1) {
    console.log("Truthy value");
} else {
    console.log("Falsy value");
}
// Output: Falsy value
// Why: 0 is a falsy value in JavaScript

// Example 5 :
let score = 78;
let grade =
    score >= 90 ? "A" :
    score >= 80 ? "B" :
    score >= 70 ? "C" : "D";
console.log("Grade:", grade);
// Output: Grade: C
// Why: 78 is >= 70 but < 80, so grade is "C"

// Example 6 :
let points = 120;
let status =
    points >= 100 ? "Gold" :
    points >= 50 ? "Silver" : "Bronze";
console.log("Status:", status);
// Output: Status: Gold
// Why: 120 is >= 100, first condition matches

// Example 7:
let loggedIn = true;
let hasToken = false;
let access = loggedIn && hasToken ? "Allow" : "Deny";
console.log("access:", access);
// Output: access: Deny
// Why: AND (&&) needs both true, but hasToken is false

// Example 8:
let a2 = 5;
a2++;
console.log(a2);
// Output: 6
// Why: Post-increment increases value after the statement

// Example 9:
let a3 = 8;
++a3;
console.log(a3);
// Output: 9
// Why: Pre-increment increases value before usage

// Example 10:
let b1 = 4;
let c1 = b1++;
console.log(b1, c1);
// Output: 5 4
// Why:
// c1 gets old value of b1 (4)
// b1 is incremented after assignment

// Example 11:
let b2 = 4;
let c3 = ++b2;
console.log(b2, c3);
// Output: 5 5
// Why:
// b2 is incremented first
// then assigned to c3

// Example 12:
let m = 10;
console.log(m--);
console.log(m);
// Output:
// 10
// 9
// Why:
// First log prints old value (10)
// Then m is decremented to 9

// Example 13:
let n = 5;
let result = n++ + ++n;
console.log(result);
// Output: 12
// Why:
// n++ → uses 5, then n becomes 6
// ++n → increments to 7, then uses 7
// 5 + 7 = 12

// Example 14:
let likes = 100;
function likePost() {
    likes++;
}
console.log(likePost());
console.log(likes);
// Output:
// undefined
// 101
// Why:
// likePost() does not return anything → undefined
// likes is incremented inside the function

// Example 15:
let count = 5;
if (count-- === 5) {
    console.log("Matched");
} else {
    console.log("Not Matched");
}
// Output: Matched
// Why:
// count-- compares using old value (5 === 5 → true)
// then count becomes 4 after comparison
