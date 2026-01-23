// Control Flow Statements in JavaScript
// If-Else Statement (if, if else, if else-if else)
// if (condition) {} --> condition true hoy to {} code run
// Example 1:
if (12 < 13) {
  console.log(true);
}
// Output: true
// Why: 12 is less than 13, so the condition is true and the if block runs.



// Example 2:
if (15 < 13) {
  console.log(true);
}
// Output: (no // output)
// Why: 15 is NOT less than 13, the condition is false, so the if block does not execute.



// Example 3:
if (!12) {
  console.log("number");
}
// Output: (no // output)
// Why: 12 is a truthy value.
// !12 becomes false, so the if condition fails.



// Example 4:
if (!0) {
  console.log("number");
}
// Output: number
// Why: 0 is a falsy value.
// !0 becomes true, so the if block runs.



// Example 5 (if-else):
if (12 < 13) {
  console.log(true);
} else {
  console.log(false);
}
// Output: true
// Why: 12 < 13 is true, so the if block executes and else is skipped.



// Example 6 (if-else):
if (15 < 13) {
  console.log(true);
} else {
  console.log(false);
}
// Output: false
// Why: 15 < 13 is false, so the else block runs.



// Example 7:
if (!12) {
  console.log("number");
} else {
  console.log("Not A Number");
}
// Output: Not A Number
// Why: 12 is truthy, !12 becomes false.
// The if condition fails, so the else block executes.

//login authentication conditions

let loggedin = false;
let admin = false;

// First condition:
// loggedin && admin
// true && false = false
// So this block is skipped

if (loggedin && admin) {
  console.log("welcome admin");
}

// Second condition:
// loggedin is true
// So this condition is true
// This block runs

else if (loggedin) {
  console.log("welcome user"); // OUTPUT
}

// This else block does not run
// because one condition above was already true

else {
  console.log("please login");
}

// Example 8 (if-else-if-else):
let Available = true;
let Approved = false;

if (Available && Approved) {
  console.log("Stock Approved and Available");
  // This runs only if stock is available
  // AND the manager has approved it
}

else if (Available) {
  console.log("Stock available but waiting for approval");
  // stockAvailable is true
  // managerApproved is false
  // so this block runs
}

else {
  console.log("Stock not available");
  // This runs only if stockAvailable is false
}

// Switch case Statement
switch ("25new") // value Case value sathe match karshe ane code run thase
{
case "10new":
console.log("10% Discount Applied");
break;

case "25new":
console.log("25% Discount Applied");
break;

case "40new":
console.log("40% Discount Applied");
break;
default:
console.log("Offer Not Vaild");
}

// Early Return console.log(Pattern
function score(value) {
if (value > 90) {
return console.log("A1 grade");
} else if (value > 80) {
return console.log("A2 grade");
} else if (value > 70) {
return console.log("B1 grade");
} else if (value > 60) {
return console.log("B2 grade");
} else {
return console.log("failed");
}
}
score(70);
// console.log(score(100))


///////////////////////////////////////////////////////////////////////
let x = 2;

switch (x) {
  case 2:
    console.log("Two");
  case 3:
    console.log("Three");
}
// x is 2, so case 2 runs → prints "Two"
// BUT there is NO break statement
// Because of that, execution "falls through" to case 3
// So "Three" is also printed

function getGrade(score) {
  if (score >= 90 && score <= 100) {
    return "A+";
  } else if (score >= 80 && score <= 89) {
    return "A";
  } else if (score >= 70 && score <= 79) {
    return "B";
  } else if (score >= 60 && score <= 69) {
    return "C";
  } else if (score >= 33 && score <= 59) {
    return "D";
  } else if (score >= 0 && score <= 32) {
    return "Fail";
  } else {
    return "Invalid Marks";
  }
}

// Example calls
console.log(getGrade(95));
console.log(getGrade(72));
console.log(getGrade(20));
console.log(getGrade(120));

// 95 → between 90–100 → "A+"
// 72 → between 70–79 → "B"
// 20 → between 0–32 → "Fail"
// 120 → outside 0–100 → "Invalid Marks"

function playGame(player1, player2) {
  if (player1 === player2) {
    return "Draw";
  }

  if (player1 === "rock" && player2 === "scissors") {
    return "player1 wins";
  }
  else{
    return "player2 wins";
  }

  if (player1 === "paper" && player2 === "rock") {
    return "player1 wins";
  }
  else{
    return "player2 wins";
  }

  if (player1 === "scissors" && player2 === "paper") {
    return "player1 wins";
  }
    else{
    return "player2 wins";
  }

  return "Invalid Input";
}

// Example calls
console.log(playGame("rock", "scissors"));
console.log(playGame("paper", "rock"));
console.log(playGame("scissors", "paper"));
console.log(playGame("rock", "rock"));

// rock beats scissors → "rock"
// paper beats rock → "paper"
// scissors beats paper → "scissors"
// same inputs → Draw
