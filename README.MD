
Javascript Variable
<h1>Example or Excercise:</h1>
<div>
<h3>Example 1 :</h3>
<p>console.log(nm);</p>
<p>let nm = "name";</p>
<p>Answer or Error: Give as Error </p>
<p>Why : nm exists but is not initialized yet resulting in </p>
</div>
 
<div>
<h3>Example 2 :</h3>
<p>console.log(b);</p>-
<p>var b = "username";</p>
<p>Answer or Error: This is not given a error</p>
<p>Why : when console.log(b) runs b exists but has no value yet.</p>
</div>
 
<div>
<h3>Example 3 :</h3>
<p>var x = 1;</p>
<p>{
    var x= 2;
}
</p>
<p>console.log(x);</p>
<p>Answer or Error: output is 2</p>
<p>Why : var ignores block scope { }</p>
</div>
 
<div>
<h3>Example 4 :</h3>
<p>let a = 10; </p>
<p>{
    let a = 20;
    console.log("Inside:", a);
}</p>
<p>
console.log("Outside:", a);
</p>
<p>Answer or Error:  Inside: 20  Outside: 10</p>
<p>Why : let is block-scoped so The a inside { } is a different variable than the a outside</p>
</div>
 
<div>
<h3>Example 5 :</h3>
<p>const person = {name: "demo"}; </p>
on console.log
<p>person.name = "user"; ✅</p>
<p>person = {} ; ❌ </p>
<p>Answer or Error:  this work: person.name = "user"; </p>
<p>Why : const does not make the object immutable and It only makes the reference constant  const protects the reference, not the object itself</p>
</div>

=======================================================================================================

<div>
  <h3>Example 1 :</h3>
  <p>true + false</p>
  <p><strong>Output:</strong> 1</p>
  <p><strong>Why:</strong> true is converted to 1 and false to 0. So, 1 + 0 = 1.</p>
</div>

<div>
  <h3>Example 2 :</h3>
  <p>null + 1</p>
  <p><strong>Output:</strong> 1</p>
  <p><strong>Why:</strong> null is treated as 0 in numeric operations. So, 0 + 1 = 1.</p>
</div>

<div>
  <h3>Example 3 :</h3>
  <p>"12" + 12</p>
  <p><strong>Output:</strong> "1212"</p>
  <p><strong>Why:</strong> The + operator performs string concatenation when one operand is a string.</p>
</div>

<div>
  <h3>Example 4 :</h3>
  <p>!!undefined</p>
  <p><strong>Output:</strong> false</p>
  <p><strong>Why:</strong> undefined is falsy. !undefined is true, and !!undefined converts it back to false.</p>
</div>

<div>
  <h3>Example 5 :</h3>
  <p>"12" - 1</p>
  <p><strong>Output:</strong> 11</p>
  <p><strong>Why:</strong> The - operator forces numeric conversion. "12" becomes 12, then 12 - 1 = 11.</p>
</div>

<div>
  <h3>Why typeof NaN is "number"</h3>
  <p>typeof NaN</p>
  <p><strong>Output:</strong> "number"</p>
  <p><strong>Why:</strong> NaN represents a failed numeric operation, but it still belongs to the number type.</p>
</div>

<div>
  <h3>Undefined vs Null</h3>
  <p>let x;</p>
  <p>console.log(x);</p>
  <p><strong>Output:</strong> undefined</p>

  <p>let y = null;</p>
  <p>console.log(y);</p>
  <p><strong>Output:</strong> null</p>

  <p><strong>Why:</strong> undefined means a variable is declared but not assigned. null is an intentional empty value.</p>
</div>
