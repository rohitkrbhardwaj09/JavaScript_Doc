//JS Functions
function greet(){
    console.log("Hello");
}

greet(); //Hello

//Function Declaration
function add(a, b) {
    return a+b;
}

//function expression
let subtract = function(a, b) {
    return a-b;
}

//Function Call
const addition = add(3, 5);
console.log(addition); //8

//Function Expression
let multiply = function(a, b){
    return a*b;
}

//Pure Function
function square(x){
    return x*x;
}

//Function Parameter
function greet2(name) {
    console.log(`Hello, ${name}!`);
}

greet2("Rohit");

//Function Invocation
function sayHello() {
    console.log("Hello");
}

sayHello();

//Anonymous Funtion
let greet3 = function(){
    console.log("Hello!");
}

greet3();

//JS Arrow Function
let addNum = (a, b) => a+b;

//JS Nested Functions
function outer(){
    function inner(){
        console.log("Inside inner function");
    }

    inner();
}

outer();

//JS Function Generator
function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
}

let generator = generatorFunction();

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

//Js function binding
let user = {
    name: "Rohit",
    sayHi: function() {
        console.log(`Hi, ${this.name}!`);
    }
}

// user.sayHi();

//using bind
let sayHiFunc = user.sayHi.bind(user);
sayHiFunc(); 

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

//JS Hoisting
console.log(x); //undefined
var x = 5;