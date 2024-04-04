//Declaration of an Array
let myArray = []; //an empty array
let numbers = [1, 2, 3, 4, 5]; //an array with numbers
let names = ["Alice", "Bob", "Charlie"]; //an array with Strings


//Recognizing a JavaScript Array: using Array.isArray() method
if(Array.isArray(numbers)){
    console.log("It's an Array");
} else{
    console.log("It's not an Array!");
}

//JavaScript Array Methods: 
//push():
let fruits1 = ["apple", "banana", "orange"]
fruits1.push("grape");
console.log(fruits1); //[ 'apple', 'banana', 'orange', 'grape' ]

//pop():
let fruits2 = ["apple", "banana", "orange"]
fruits2.pop();
console.log(fruits2); //[ 'apple', 'banana' ]

//shift():
let fruits3 = ["apple", "banana", "orange"]
fruits3.shift()
console.log(fruits3); //[ 'banana', 'orange' ]

//unshift():
let fruits4 = ["apple", "banana", "orange"]
fruits4.unshift("pineapple")
console.log(fruits4); //[ 'pineapple', 'apple', 'banana', 'orange' ]

//splice():
let fruits5 = ["apple", "banana", "orange"]
fruits5.splice(1, 1, "grape", "melon")
console.log(fruits5); //[ 'apple', 'grape', 'melon', 'orange' ]

//slice():
let fruits6 = ["apple", "banana", "orange", 'grape', 'melon']
let slicedArr = fruits6.slice(1, 4);
console.log(slicedArr); //[ 'banana', 'orange', 'grape' ]

//concat():
let fruits7 = ["apple", "banana", "orange"]
let fruits8 = ['grape', 'melon'];
let allFruit = fruits7.concat(fruits8);
console.log(allFruit); //[ 'apple', 'banana', 'orange', 'grape', 'melon' ]

//indexOf():
let fruits9 = ["apple", "banana", "orange"]
let indexedOfBanana = fruits9.indexOf("banana");
console.log(indexedOfBanana); //1

//forEach():
let fruits10 = ["apple", "banana", "orange"]
fruits10.forEach(function(fruit){
    console.log(fruit); 
    //apple
    //banana
    //orange
})

// map():
let fruits11 = ["apple", "banana", "orange"]
let fruitNames = fruits11.map(function(fruit) {
    return fruit;
})
console.log(fruitNames); //[ 'apple', 'banana', 'orange' ]

//filter():
let numberss = ["1", "2", "3", "4", "5", "6", "7"]
let evenNumbers = numberss.filter(function(number) {
    return number % 2 === 0;
}) 

console.log(evenNumbers); //[ '2', '4', '6' ]