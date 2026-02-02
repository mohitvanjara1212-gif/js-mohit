/*************************************************
 Example 1:
 Print numbers from 1 to 10 using a for loop
*************************************************/
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// Reason: for loop is best when start & end are known



/*************************************************
 Example 2:
 Print numbers from 10 to 1 using while loop
*************************************************/
let j = 10;
while (j >= 1) {
  console.log(j);
  j--;
}
// Reason: while loop runs until condition becomes false



/*************************************************
 Example 3:
 Print even numbers from 1 to 20 using for loop
*************************************************/
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// Reason: Even numbers are divisible by 2



/*************************************************
 Example 4:
 Print odd numbers from 1 to 15 using while loop
*************************************************/
let k = 1;
while (k <= 15) {
  if (k % 2 !== 0) {
    console.log(k);
  }
  k++;
}
// Reason: Odd numbers are NOT divisible by 2



/*************************************************
 Example 5:
 Print multiplication table of 5
*************************************************/
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}
// Reason: Template literals make output readable



/*************************************************
 Example 6:
 Find sum of numbers from 1 to 100
*************************************************/
let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum = sum + i;
}

console.log("Sum:", sum);
// Reason: Accumulator variable stores total



/*************************************************
 Example 7:
 Print numbers between 1 to 50 divisible by 3
*************************************************/
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
// Reason: % operator checks divisibility



/*************************************************
 Example 8:
 Ask user for a number and print even/odd
*************************************************/
// NOTE: Works in browser only
let num = prompt("Give a number");

for (let i = 1; i <= num; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}
// FIX: Typo corrected (numl → num)



/*************************************************
 Example 9:
 Count numbers between 1 to 100 divisible by 3 or 5
*************************************************/
let countDivisible = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    countDivisible++;
  }
}

console.log("Count:", countDivisible);
// FIX: Original code printed numbers, not count



/*************************************************
 Example 10:
 Stop at first multiple of 7
*************************************************/
for (let i = 1; i <= 100; i++) {
  console.log(i);
  if (i % 7 === 0) {
    break;
  }
}
// Reason: break completely exits loop



/*************************************************
 Example 11:
 Skip multiples of 3 (continue)
*************************************************/
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
}
// Reason: continue skips current iteration



/*************************************************
 Example 12:
 Print first 5 odd numbers using counter + break
*************************************************/
let oddCount = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    continue;
  }

  console.log(i);
  oddCount++;

  if (oddCount === 5) {
    break;
  }
}