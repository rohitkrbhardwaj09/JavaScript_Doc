//Creation
let singleQuotedString = 'Hello'; //Single Quoted String
let doubleQuotedString = "World"; //Double Quoted String
let templateLiteralString = `Hello, ${doubleQuotedString}`; //using Backticks

console.log(templateLiteralString)

//Immutable
let str = 'Hello';
str[0] = 'M'; //This won't modify the string 'Hello;
str += " World!"; //This creates a new String "Hello World!"
console.log(str);

//Length
let str2 = 'Hello';
console.log(str2.length); //5

//Accessing Characters
let str3 = "Hello";
console.log(str3[0]); //H
console.log(str3[4]); //o

//Methods
const methodStr = "Hello World!"

//charAt(index)
console.log(methodStr.charAt(0)); //H
console.log(methodStr.charAt(3)); //l

// 2. charCodeAt(index)
console.log(methodStr.charCodeAt(0)); //72
console.log(methodStr.charCodeAt(3)); //108

// 3. concat(str1, str2, ...)
const firstStr = "Hello ";
const lastStr = "World";
console.log(firstStr.concat(lastStr)); //Hello World

// 4. includes(searchString, position)
console.log(methodStr.includes("Hello")); //true
console.log(methodStr.includes("World")); //true
console.log(methodStr.includes("world")); //false

// 5. indexOf(searchValue, fromIndex)
console.log(methodStr.indexOf('o')); //4
console.log(methodStr.indexOf('o', 5)); //7

// 6. lastIndexOf(searchValue, fromIndex)
console.log(methodStr.lastIndexOf("o"));
console.log(methodStr.lastIndexOf("o", 5));

// 7. match(regexp)
const matchStr = "The rain in spain falls mainly in the plain."
const regex = /ain/g;
console.log(matchStr.match(regex)); //[ 'ain', 'ain', 'ain', 'ain' ]

// 8. replace(searchValue, replaceValue)
console.log(methodStr.replace('World', "Universe"));

// 9. search(regexp)
console.log(methodStr.search("World")); //6

// 10. slice(startIndex, endIndex)
console.log(methodStr.slice(6));
console.log(methodStr.slice(0, 5));

// 11. split(separator, limit)
console.log(methodStr.split(" ")); //[ 'Hello', 'World!' ]

// 12. substring(startIndex, endIndex)
console.log(methodStr.substring(6)); //World!
console.log(methodStr.substring(0, 5)); //Hello

// 13. substr(startIndex, length)
console.log(methodStr.substr(6)); //World!
console.log(methodStr.substr(0, 5)); //Hello

// 14. toLowerCase()
console.log(methodStr.toLowerCase()); //hello world!

// 15. toUpperCase()
console.log(methodStr.toUpperCase()); //HELLO WORLD!

// 16. trim()
const trmStr = "  Hello World  ";
console.log(trmStr.trim()); //Hello World

// 17. padStart(targetLength, padString)
const numStr = "5"
console.log(numStr.padStart(2, "0")); //05

// 18. padEnd(targetLength, padString)
console.log(numStr.padEnd(2, "0"));//50

// 19. startWith(searchString, position)
console.log(methodStr.startsWith("Hello")); //true

// 20. endsWith(searchString, position)
console.log(methodStr.endsWith("World!")); //true

// 21. repeat(count)
console.log(methodStr.repeat(3));

// 22. trimStart() or trimLeft()
const trimStartStr = "  Hello"
console.log(trimStartStr.trimStart());

// 23. trimEnd() or trimRight()
const trimEndStr = "Hello    "
console.log(trimEndStr.trimEnd());

// 24. toLocaleLowerCase(locale)
const dStr = "ß";
console.log(dStr.toLocaleLowerCase("de"));

// 25. toLocaleUpperCase(locale)
const dStr2 = "ß";
console.log(dStr.toLocaleUpperCase("de"));