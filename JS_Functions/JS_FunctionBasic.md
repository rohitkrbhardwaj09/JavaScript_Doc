# JavaScript Function

## 1. JS Functions:

<p>
Functions in JavaScript are blocks of reusable code designed to perform a specific task. They are defined using the <strong>function</strong> keyword and can be invoked (called) whenever needed.
</p>
<pre>
    //JS Functions
    function greet(){
        console.log("Hello");
    }
    greet(); //Hello

</pre>

## JS Function Definition:

<p>
Functions can be defined using function declarations or function expressions.

<strong>Example of Function Declaration:</strong>

</p>
<pre>
    function add(a, b) {
        return a+b;
    }
</pre>

<strong>Example of Function Expression:</strong>

<pre>
    let subtract = function(a, b) {
    return a-b;
}
</pre>

## JS function Call

<p>Functions are called by using their name followed by parentheses ().</p>
<pre>
    add(3, 5);
</pre>

## JS Function Expression

<p>Function expressions are similar to function declarations but are defined as part of an expression and can be assigned to variables.</p>
<pre>
    let multiply = function(a, b){
        return a*b;
    }
</pre>

## JS Pure Function

<p>Pure functions are functions that always return the same result for the same input and do not produce side effects.</p>
<pre>
    function square(x){
        return x*x;
    }
</pre>

## JS Funtion Parameters

<p>
Function parameters are placeholders for values that a function will receive when it is called. Parameters are listed within the parentheses () in the function definition.
</p>
<pre>
    function greet2(name) {
        console.log(`Hello, ${name}!`);
    }
    greet2("Rohit");

</pre>

## JS Function Invocation

<p>
Function invocation refers to calling a function. Functions can be invoked by using their name followed by <strong>parentheses ()</strong>
</p>
<pre>
    function sayHello() {
        console.log("Hello");
    }
    sayHello();

</pre>

## JS Anonymous Function

<p>
Anonymous functions are functions that do not have a name. They are often used as arguments to other functions or assigned to variables.
</p>
<pre>
    let greet3 = function(){
        console.log("Hello!");
    }
    greet3();

</pre>

## JS Arrow Functions

<p>
Arrow functions are a concise way to write functions in JavaScript. They use the <strong>=></strong> syntax and provide a more compact syntax compared to traditional function expressions.
</p>
<pre>  
    let addNum = (a, b) => a+b;
</pre>

## JS Nested Functions

<p>
Nested functions are functions defined inside other functions. They have access to the variables and parameters of the enclosing function.
</p>
<pre>
    function outer(){
        function inner(){
            console.log("Inside inner function");
        }
        inner();
    }
    outer();

</pre>

## JS Function Generator

<p>Function generators are functions that can pause and resume their execution, allowing for the generation of a sequence of values.</p>
<pre>
    function* generatorFunction() {
        yield 1;
        yield 2;
        yield 3;
    }
    let generator = generatorFunction();
    console.log(generator.next().value);
    console.log(generator.next().value);
    console.log(generator.next().value);
</pre>

## JS Function Binding

<p>
    Function binding allowes you to set the <strong>this</strong> value inside a function, ensuring that it always refers to a specific object.
</p>
<pre>
    let sayHiFunc = user.sayHi.bind(user);
    sayHiFunc(); 
</pre>

## JS Async/Await Function

<p>Async/await functions are a syntactic sugar for writing asynchronous code using promises. They make asynchronous code look and behave like synchronous code, making it easier to read and write.</p>
<pre>
    //JS Async/Await
    async function fetchData() {
        let response = await fetch("https://api.github.com/users/hiteshchoudhary");
        let data = await response.json();
        return data;
    }
    fetchData().then(data => {
        console.log(data);
    }).catch(error => {
        console.error(error);
    })
</pre>

## Hoisting in JavaScript

<p>Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase, before the code is executed.</p>
<pre>
    console.log(x); //undefined
    var x = 5;
</pre>
<p>In this example, even though x is logged before it's declared, it doesn't throw an error because of hoisting. The variable declaration var x is hoisted to the top of its containing scope.</p>
