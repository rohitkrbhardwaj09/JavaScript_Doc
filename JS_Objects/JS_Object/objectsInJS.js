//Object Literal Notation
let person1 = {
    name: "John",
    age: 30,
    city: "New York"
};

//Using the Object Constructor:
let person2 = new Object();
person2.name = "John";
person2.age = 30;
person2.city = "New York";

//Accessing Object Properties:
console.log(person2.name); //John
console.log(person2['age']); //30

//Modifying Object Properties:
person2.age = 35;
console.log(person2.age); //35

//Adding New Properties: 
person2.gender = "Male";
console.log(person2); //{ name: 'John', age: 35, city: 'New York', gender: 'Male' }

//Deleting properties
delete person2.city;
console.log(person2); //{ name: 'John', age: 35, gender: 'Male' }

//Iterate over Object Properties: 
for (const key in person2) {
    console.log(key + ": " + person2[key]) ;
    //Output
    //name: John
    //age: 35
    //gender: Male
}

//Object Methods: 
let person3 = {
    name: "Rohit",
    age: 27,
    greet: function() {
        console.log(`Hello, My name is ${this.name}`);
    }
}

person3.greet(); //Hello, My name is Rohit

//Object Prototypes and Inheritance:
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

//JSON (JavaScript Object Notation)
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