# JavaScript Objects

<p>JavaScript objects are fundamental data structures used to store collections of key-value pairs. They are dynamic, meaning properties can be added or removed at any time. Objects in JavaScript can represent complex data structures and are integral to the language's versatility. Here's an overview of JavaScript objects:</p>

## Creating Objects:

<p>There are several ways to create objects in JavaScript</p>

### 1. Object Literal Notation:

<pre>
    let person = {
        name: "John",
        age: 30,
        city: "New York"
    };
</pre>

### 2. Using the Object Constructor:

<pre>
    let person2 = new Object();
    person2.name = "John";
    person2.age = 30;
    person2.city = "New York";
</pre>

### 3. Accessing Object Properties:

<p>
You can access properties of an object using dot notation or bracket notation:
</p>
<pre>
    console.log(person2.name); //John
    console.log(person2['age']); //30
</pre>

### 4. Modifying Object Properties: 
<p>You can modify properties of an object by simply assigning a new value:</p>
<pre>
    person2.age = 35;
    console.log(person2.age); //35
</pre>

### 5. Adding New PRoperties: 
<p>You can add new properties to an object on the fly:</p>
<pre>
    person2.gender = "Male";
    console.log(person2); //{ name: 'John', age: 35, city: 'New York', gender: 'Male' }
</pre>

### 6. Deleting Properties: 
<p>You can delete properties from an object using the <strong>delete</strong> keyword.</p>
<pre>
    delete person2.city;
    console.log(person2); //{ name: 'John', age: 35, gender: 'Male' }
</pre>

## Iterate over Object Properties: 
<p>You can Iterate over an object's properties using <strong>for...in</strong> loop:</p>
<pre>
    for (const key in person2) {
        console.log(key + ": " + person2[key]) ;
        //Output
        //name: John
        //age: 35
        //gender: Male
    }
</pre>

## Object Methods: 
<p>Objects can also contain methods (functions) as properties:</p>
<pre>
    let person3 = {
        name: "Rohit",
        age: 27,
        greet: function() {
            console.log(`Hello, My name is ${this.name}`);
        }
    }

    person3.greet(); //Hello, My name is Rohit
</pre>

## Object Prototypes and Inheritance:
<p>
JavaScript objects can inherit properties and methods from other objects through prototypes. This forms the basis of inheritance in JavaScript.
</p>
<pre>
    let vehiclePrototype = {
        startEngine : function() {
            console.log("Engine Started.");
        },

        stopEngine : function() {
            console.log("Engine Stopped.");
        }
    };

    //Create a new object that inherits from vehiclePrototype
    let car = Object.create(vehiclePrototype);

    //Add properties specific to the car object
    car.make = "Toyota";
    car.model = "Camry";

    //Access inherited method
    car.startEngine(); //Engine Started

    //Define a new method for the car object
    car.drive = function() {
        console.log("Car is driving");
    };

    //call the new method
    car.drive(); //Car is driving
</pre>

## JSON (JavaScript Object Notation):
<p>JavaScript objects can easily be converted to JSON format and vice versa, allowing for easy data interchange with servers.</p>
<pre>
    let person4 = {
        name: "Rohit Bhardwaj",
        age: 28,
        city: "Kanpur",
        greet: function() {
            console.log(`Hello, My name is ${this.name}`);
        }
    };

    console.log(person4.name); //Rohit Bhardwaj

    person4.age = 35;
    console.log(person4.age); //35

    person4.gender = "Male";
    console.log(person4.gender); //Male

    delete person4.city;

    for (const key in person4) {
        console.log(key+" : "+person4[key]);  
    }
    //name : Rohit Bhardwaj
    //age : 35
    //greet : function() {
    //        console.log(`Hello, My name is ${this.name}`);
    //    }
    gender : Male

    person4.greet(); //Hello, My name is Rohit Bhardwaj
</pre>
