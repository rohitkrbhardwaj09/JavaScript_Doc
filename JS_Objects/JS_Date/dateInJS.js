//This creates a Date object representing the current date and time.
let currentDate = new Date();
console.log(currentDate); //2024-04-04T17:50:40.631Z

//This creates a Date object based on the number of milliseconds since January 1, 1970, 00:00:00 UTC (the Unix Epoch).
let date = new Date(0);
console.log(date);

//date string
let dateString = '2024-04-04T12:30:00'; // ISO 8601 format: YYYY-MM-DDTHH:MM:SS
let date2 = new Date(dateString);
console.log(date2);

//Year, Month, Day, Hour, Minute, Second:
let date3 = new Date(2024, 4, 5, 7, 34, 40);
console.log(date3);

// 1. getDate(), getMonth(), getFullYear():
let today = new Date();
let day = today.getDate();
let month = today.getMonth();
let year = today.getFullYear();

console.log(`Today is ${day}/${month+1}/${year}`);

//2. getDay()
let dayOfWeek = today.getDay(); // Get the day of the week (0 for Sunday, 1 for Monday, etc.)
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
console.log(`Today is ${days[dayOfWeek]}`);

//3. getHours(), getMinutes(), getSeconds():
let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();
console.log(`Current time is: ${hours}:${minutes}:${seconds}`);

//4. getTime():
let millisecondsSinceEpoch = today.getTime();
console.log(millisecondsSinceEpoch);

//5. toISOString():
let isoString = today.toISOString(); // Get the date in ISO 8601 format (UTC)
console.log(`ISO 8601 formatted date: ${isoString}`);

// -----------------------------------------------------------------------------
// 1. setDate(), setMonth(), setFullYear():
today.setDate(10);

// Set the month to November (index 10 because months are zero-indexed)
today.setMonth(10);

// Set the year to 2025
today.setFullYear(2025);

console.log(`Updated date: ${today}`);

// 3. setTime():
// Set the date to January 1, 2030
let newDate = today.setTime(1893474000000) // Number of milliseconds for January 1, 2030

console.log(`Updated date using setTime(): ${newDate}`);