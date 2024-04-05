# [JavaScript Date()](https://github.com/rohitkrbhardwaj09/JavaScript_Doc/blob/main/JS_Objects/JS_Date/dateInJS.js)

<p>
In JavaScript, the <b>Date</b> object is used to work with dates and times. It provides methods for <b>creating</b>, <b>manipulating</b>, and <b>formatting</b> dates and times. Here's a comprehensive explanation of the Date object:
</p>

### Creating a Date Object:

<p>You can create a new Date object using one of the following methods:</p>

1. <b>No Arguments:</b>
<p>//This creates a Date object representing the current date and time.</p>
<strong>Syntax:</strong>
<pre>
    let currentDate = new Date();
</pre>
<strong>Example:</strong>
<pre>
    let currentDate = new Date();
    console.log(currentDate); //2024-04-04T17:50:40.631Z
</pre>

2. <b>Milliseconds Since Epoch:</b>
<p>This creates a Date object based on the number of milliseconds since January 1, 1970, 00:00:00 UTC (the Unix Epoch).</p>
<strong>Syntax:</strong>
<pre>
    let date = new Date(milliseconds);
</pre>
<strong>Example:</strong>
<pre>
    let date = new Date(0);
    console.log(date);
</pre>

3. <b>Date String:</b>
<p>This creates a Date object based on the number of milliseconds since January 1, 1970, 00:00:00 UTC (the Unix Epoch).</p>
<strong>Syntax:</strong>
<pre>
    let date = new Date(dateString);
</pre>
<strong>Example:</strong>
<pre>
    let dateString = '2024-04-04T12:30:00'; // ISO 8601 format: YYYY-MM-DDTHH:MM:SS
    let date2 = new Date(dateString);
    console.log(date2);
</pre>

4. <b>Year, Month, Day, Hour, Minute, Second:</b>
<p>This creates a Date object with the specified year, month (0-11), day, hour, minute, and second.</p>
<strong>Syntax:</strong> 
<pre>
    let date = new Date(year, month, day, hours, minutes, seconds);
</pre>
<strong>Example:</strong>
<pre>
    //Year, Month, Day, Hour, Minute, Second:
    let date3 = new Date(2024, 4, 5, 7, 34, 40);
    console.log(date3);
</pre>

## Getting Date and Time Components:
<p>Once you have a Date object, you can retrieve various components of the date and time using its methods:</p>

### 1. getDate(), getMonth(), getFullYear():
<pre>
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();

    console.log(`Today is ${day}/${month+1}/${year}`);
</pre>

### 2. getDay():
<pre>
    let today = new Date();
    let dayOfWeek = today.getDay(); // Get the day of the week (0 for Sunday, 1 for Monday, etc.)
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    console.log(`Today is ${days[dayOfWeek]}`);
</pre>

### 3. getHours(), getMinutes(), getSeconds():
<pre>
    let today = new Date();
    
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    console.log(`Current time is: ${hours}:${minutes}:${seconds}`);
</pre>

### 4. getTime()
<pre>
    let today = new Date();

    let millisecondsSinceEpoch = today.getTime();
    console.log(millisecondsSinceEpoch);
</pre>

### 4. getTime()
<pre>
    let today = new Date();

    let millisecondsSinceEpoch = today.getTime();
    console.log(millisecondsSinceEpoch);
</pre>

### 5. toISOString()
<pre>
    let isoString = today.toISOString(); // Get the date in ISO 8601 format (UTC)
    console.log(`ISO 8601 formatted date: ${isoString}`);
</pre>

## Setting Date and Time Components:

### 1. setDate(), setMonth(), setFullYear():
<pre>
    let today = new Date();
    today.setDate(10);
    today.setMonth(10);
    today.setFullYear(2025);

    console.log(`Updated date: ${today}`);
</pre>

### 2. setHours(), setMinutes(), setSeconds():
<pre>
    let today = new Date();
    today.setHours(15);
    today.setMinutes(30);
    today.setSeconds(45)

    console.log(`Updated time: ${today}`);
</pre>

### 3. setTime():
<pre>
    today.setDate(10);
    today.setMonth(10);
    today.setFullYear(2025);

    console.log(`Updated date: ${today}`);
</pre>

