# JavaScript String [<i>click here to view code</i>](https://github.com/rohitkrbhardwaj09/JavaScript_Doc/blob/main/JS_Objects/JS_String/string.js)

## What is String in JavaScript?

<p>In JavaScript, strings are sequences of characters used to represent text. They are one of the fundamental data types in the language and are widely used for storing and manipulating textual data.</p>

### Creation:

<p>String can be created using single quotes (' ') or double quotes (" "), and by using backticks also (` `). Backticks allow for template leterals, which support String interpolation and multiline strings.</p>

<pre>
    let singleQuotedString = 'Hello';
    let doubleQuotedString = "World";
    let templateLiteralString = `Hello, ${world}`;
</pre>

### Immutable:

<p>Strings in JavaScript are immutable, meaning once created, their value cannot be changed. However, you can create new Strings based on existing ones through operations like concatenation.
</p>
<pre>
    let str = 'Hello';
    str[0] = 'M'; //This won't modify the String 'Hello'
    str += ' World!'; //This creates a new String 'Hello World!'
</pre>

### Length:

<p>You can find the length of a string using the length property.</p>
<pre>
    let str2 = 'Hello';
    console.log(str2.length); //5
</pre>

### Accessing Characters:

<p>
Individual characters within a string can be accessed using bracket notation with the character's index. Indexing starts at 0.
</p>
<pre>
    let str3 = "Hello";
    console.log(str3[0]); //H
    console.log(str3[4]); //o
</pre>

### Methods:

<p>Javascript provide many built-in methods for manipulating strings. There are many methods, we will see one by one to each.</p>

#### 1. charAt(index)

- Returns the character at the specified index in String
<pre>
    const methodStr = "Hello World!"
    console.log(methodStr.charAt(0)); //H
    console.log(methodStr.charAt(3)); //l
</pre>

#### 2. charCodeAt(index)

- Returns the Unicode value of the character at the specified index.
<pre>
    const methodStr = "Hello World!"
    console.log(methodStr.charCodeAt(0)); //72
    console.log(methodStr.charCodeAt(3)); //108
</pre>

#### 3. concat(str1, str2, ...)

- Combines the text of two or more strings and returns a new string.
<pre>
    const firstStr = "Hello ";
    const lastStr = "World";
    console.log(firstStr.concat(lastStr)); //Hello World
</pre>

#### 4. includes(searchString, position)

- Checks if a string contains the specified substring.
<pre>
    const methodStr = "Hello World!";
    console.log(methodStr.includes("Hello")); //true
    console.log(methodStr.includes("World")); //true
    console.log(methodStr.includes("world")); //false
</pre>
#### 5. indexOf(searchValue, fromIndex)
- Returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex.
<pre>
    const methodStr = "Hello World!";
    console.log(methodStr.indexOf('o')); //4
    console.log(methodStr.indexOf('o', 5)); //7
</pre>
#### 6. lastIndexOf(searchValue, fromIndex)
- Returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex.
<pre>
    const methodStr = "Hello World!";
    console.log(methodStr.lastIndexOf("o"));
    console.log(methodStr.lastIndexOf("o", 5));
</pre>
#### 7. match(regexp)
- Searches a string for a match against a regular expression and returns the matches as an array.
<pre>
    const matchStr = "The rain in spain falls mainly in the plain."
    const regex = /ain/g;
    console.log(matchStr.match(regex)); //[ 'ain', 'ain', 'ain', 'ain' ]
</pre>
#### 8. replace(searchValue, replaceValue)
- Searches a string for a specified value or regular expression and replaces it with a replacement string.
<pre>
    const methodStr = "Hello World!";
    console.log(methodStr.replace('World', "Universe"));
</pre>
#### 9. search(regexp)
- Searches a string for a specified value or regular expression and returns the index of the match, if found.
<pre>
    const methodStr = "Hello World!";
    console.log(methodStr.search("World")); //6
</pre>
#### 10. slice(startIndex, endIndex)
- Extracts a section of a string and returns it as a new string.
<pre>
    const methodStr = "Hello World!";
    console.log(methodStr.slice(6)); //World!
    console.log(methodStr.slice(0, 5)); //Hello
</pre>
#### 11. split(separator, limit)
- Splits a string into an array of substrings based on the specified separator.
<pre>
    const methodStr = "Hello World!";
    console.log(methodStr.split(" ")); //[ 'Hello', 'World!' ]
</pre>
#### 12. substring(startIndex, endIndex)
- Returns the part of the string between the start and end indexes, or to the end of the string.
<pre>
    const methodStr = "Hello World!";
    console.log(methodStr.suvstring(6)); //World!
    console.log(methodStr.substring(0, 5)); //Hello
</pre>
#### 13. substr(startIndex, length)
- Returns the characters in a string beginning at the specified location through the specified number of characters.
<pre>
    const methodStr = "Hello World!";
    console.log(methodStr.substr(6)); //World!
    console.log(methodStr.substr(0, 5)); //Hello
</pre>
#### 14. toLowerCase()
- Returns the calling string value converted to lowercase.
<pre>
    const methodStr = "Hello World!";
    console.log(methodStr.toLowerCase()); //hello world!
</pre>
#### 15. toUpperCase()
- Returns the calling string value converted to uppercase.
<pre>
    const methodStr = "Hello World!";
    console.log(methodStr.toUpperCase()); //HELLO WORLD!
</pre>
#### 16. trim()
- Removes whitespace from both ends of a string.
<pre>
const trmStr = "  Hello World  ";
console.log(trmStr.trim()); //Hello World
</pre>
#### 17. padStart(targetLength, padString)
- Pads the current string with another string (repeated, if needed) so that the resulting string reaches the given length.
<pre>
    const numStr = "5"
    console.log(numStr.padStart(2, "0")); //05
</pre>
#### 18. padEnd(targetLength, padString)
- Pads the current string with another string (repeated, if needed) so that the resulting string reaches the given length.
<pre>
    const numStr = "5"
    console.log(numStr.padEnd(2, "0")); //50
</pre>
#### 19. startWith(searchString, position)
- Determines whether a string begins with the characters of a specified string, returning true or false as appropriate.
<pre>
    const methodStr = "Hello World!";
    console.log(methodStr.startsWith("Hello")); //true
</pre>
#### 20. endsWith(searchString, position)
- Determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
<pre>
    const methodStr = "Hello World!";
    console.log(methodStr.endsWith("World!")); //true
</pre>

#### 21. repeat(count)
- Returns a new string consisting of the elements of the string repeated count times.
<pre>
    const methodStr = "Hello World!";
    console.log(methodStr.repeat(3)); //Hello World!Hello World!Hello World!
</pre>

#### 22. trimStart() or trimLeft()
- Removes whitespace from the beginning of a string.
<pre>
    const trimStartStr = "  Hello"
    console.log(trimStartStr.trimStart()); //Hello
</pre>

#### 23. trimEnd() or trimRight()
- Removes whitespace from the end of a string.
<pre>
    const trimEndStr = "Hello  "
    console.log(trimEndStr.trimEnd()); //Hello
</pre>

#### 24. toLocaleLowerCase(locale)
- Returns a new string with all of the calling string's characters converted to lowercase, using the case mappings of the specified locale.
<pre>
    const dStr = "ß";
    console.log(dStr.toLocaleLowerCase("de")); //ß
</pre>

#### 25. toLocaleUpperCase(locale)
- Returns a new string with all of the calling string's characters converted to uppercase, using the case mappings of the specified locale.
<pre>
    const dStr2 = "ß";
    console.log(dStr.toLocaleUpperCase("de")); //SS
</pre>
