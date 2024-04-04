# JavaScript Array

## What is Array in JavaScript?
<p>In JavaScript, an array is a data structure used to store multiple values in a single variable. Arrays can hold elements of any data type, and the elements are accessed by their index, starting from 0.</p>

### Basic Terminologies of JavaScript Array:
- <strong>Element</strong>: Each individual value stored in an array.
- <strong>Index</strong>: The position of an element within the array, starting from 0.
- <strong>Length</strong>: The number of elements in an array.
- <strong>Mutable</strong>: Arrays in JavaScript are mutable, meaning that their elements can be changed.

### Declaration of an Array:
<p>Arrays in JavaScript can be declared using square brackets [ ]. For example:</p>

<pre>
    //Declaration of an Array
    let myArray = []; //an empty array
    let numbers = [1, 2, 3, 4, 5]; //an array with numbers
    let names = ["Alice", "Bob", "Charlie"]; //an array with Strings
</pre>

### Basic Operations on JavaScript Arrays:
- Accessing elements: <strong>array[index]</strong>
- Adding elements: <strong>array.push(element)</strong>
- Removing elements: <strong>array.pop()</strong>
- Finding the length: <strong>array.length</strong>
- Iterating through elements: <strong>for...of</strong> loop or <strong>array.forEach()</strong>

### When to use JavaScript Arrays and Objects?

- Use arrays when you have a collection of similar items and you need to maintain order or perform operations like sorting, filtering, or mapping.

- Use objects when you have a collection of key-value pairs and you need to access elements by their keys or when you need to represent structured data.

### Recognizing a JavaScript Array:

You can use the <strong>Array.isArray()</strong> method to check if a variable is an array:

<pre>
    let numbers = [1, 2, 3, 4, 5];

    if(Array.isArray(numbers)){
        console.log("It's an Array");
    } else{
        console.log("It's not an Array!");
    }
</pre>

## JavaScript Array Methods 
1) <strong>push():</strong> Adds one or more elements to the end of an array and returns the new length of the array.

<pre>
    //push():
    let fruits = ["apple", "banana", "orange"]
    fruits.push("grape");
    console.log(fruits); //[ 'apple', 'banana', 'orange', 'grape' ]
</pre>

2) <strong>pop():</strong> Removes the last element from an array and returns that element.
<pre>
    //pop():
    let fruits2 = ["apple", "banana", "orange"]
    fruits2.pop();
    console.log(fruits2); //[ 'apple', 'banana' ]
</pre>

3) <strong>shift():</strong> Removes the first element from an array and returns that element.
<pre>
    //shift():
    let fruits3 = ["apple", "banana", "orange"]
    fruits3.shift()
    console.log(fruits3); //[ 'banana', 'orange' ]
</pre>

4) <strong>unshift():</strong> Adds one or more elements to the beginning of an array and returns the new length of the array.
<pre>
   //unshift():
    let fruits4 = ["apple", "banana", "orange"]
    fruits4.unshift("pineapple")
    console.log(fruits4); //[ 'pineapple', 'apple', 'banana', 'orange' ]
</pre>

4) <strong>splice():</strong> Adds or removes elements from an array.

#### syntax:
<pre>
    array.splice(startIndex, deleteCount, item1, item2, ...)

</pre>

<pre>
   let fruits5 = ["apple", "banana", "orange"]
    fruits5.splice(1, 1, "grape", "melon")
    console.log(fruits5); //[ 'apple', 'grape', 'melon', 'orange' ]
</pre>

5) <strong>slice():</strong> Returns a shallow copy of a portion of an array into a new array object.

<pre>
  //slice():
    let fruits6 = ["apple", "banana", "orange", 'grape', 'melon']
    let slicedArr = fruits6.slice(1, 4);
    console.log(slicedArr); //[ 'banana', 'orange', 'grape' ]
</pre>

6) <strong>concat():</strong> Joins two or more arrays and returns a new array.

<pre>
  //concat():
    let fruits7 = ["apple", "banana", "orange"]
    let fruits8 = ['grape', 'melon'];
    let allFruit = fruits7.concat(fruits8);
    console.log(allFruit); //[ 'apple', 'banana', 'orange', 'grape', 'melon' ]
</pre>

7) <strong>indexOf():</strong> Returns the first index at which a given element can be found in the array, or -1 if it is not present.

<pre>
  //indexOf():
    let fruits9 = ["apple", "banana", "orange"]
    let indexedOfBanana = fruits9.indexOf("banana");
    console.log(indexedOfBanana); //1
</pre>

8) <strong>forEach():</strong> Executes a provided function once for each array element.

<pre>
  //forEach():
    let fruits10 = ["apple", "banana", "orange"]
    fruits10.forEach(function(fruit){
        console.log(fruit); 
        //apple
        //banana
        //orange
    })
</pre>

9) <strong>map():</strong> Creates a new array populated with the results of calling a provided function on every element in the calling array.

<pre>
    // map():
    let fruits11 = ["apple", "banana", "orange"]
    let fruitNames = fruits11.map(function(fruit) {
        return fruit;
    })
    console.log(fruitNames); //[ 'apple', 'banana', 'orange' ]
</pre>

10) <strong>filter():</strong>  Creates a new array with all elements that pass the test implemented by the provided function.

<pre>
  //filter():
    let numberss = ["1", "2", "3", "4", "5", "6", "7"]
    let evenNumbers = numberss.filter(function(number) {
        return number % 2 === 0;
    }) 

    console.log(evenNumbers); //[ '2', '4', '6' ]
</pre>

