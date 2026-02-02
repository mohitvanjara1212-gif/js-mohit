// loops repeating code blocks
// 1 2 3 4 5 6
// for loop
// why use for-loop? when you know how many times you want to repeat a block of code
// print 1 to 10-> console.log(1); console.log(2);

// kaya thi javanu chhe --> kaya sudhi javanu chhe --> kevi rite javanu chhe
// for (ex. 1> 50 -> increment by 1)
//(start; end; change)


// for (let i2 = 1; i2 <= 10; i2++) {
//     console.log(i2);
// }

// for (let i = 10; i >= 0; --i) {
//     console.log(i);
// }

// for (let i1 = 1; i1 <= 10; i1++) {
//     console.log("hello (" + i1 + ")");
// }

// let j=1;
// while (j<=10) {
//     console.log("hi (" + j + ")");
//     j++;
// }

//  let c = 10
//  while (c >= 5) {
//  console.log(c);
//  c--;
//  }

// let d = "Hello";
// while (d <= 10) {
// console.log(d);
// d++;
// }

// let f = 10;
// while (f >= 1) {
// console.log(f);
// --f;
// }

let j = 12 // start
do {
console.log("do while loop: ", j); // code
j++; // change (condition)
} while (j < 20) ; // while check after executing code block (end)
// // break

for (let k1 = 1; k1 <= 201; k1++) {
console.log("Loop with break", k1);
if (k1===30) {
break;
}
}

//// continue
for (let a2 = 1; a2 <= 10; a2++) {
if (a2===5) {
continue;
}
console.log(a2);
}