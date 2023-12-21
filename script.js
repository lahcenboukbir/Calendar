// Selecting elements from the DOM
const date = document.querySelector(".date");
const day = document.querySelector(".day");
const month = document.querySelector(".month");
const year = document.querySelector(".year");

// Creating a new Date object to get the current date and time
const currentDate = new Date();

// Array to store days
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Array to store months
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Displaying the current date, day, month, and year in the UI
date.innerHTML = (currentDate.getDate() < 10 ? "0" : "") + currentDate.getDate(); // Adding leading zero for single-digit dates
day.innerHTML = days[currentDate.getDay()]; // Getting the day of the week
month.innerHTML = months[currentDate.getMonth()]; // Getting the month
year.innerHTML = currentDate.getFullYear(); // Getting the year
