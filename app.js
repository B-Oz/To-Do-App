//? ---Date----

let date = new Date();
let aylar = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  " Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = aylar[date.getMonth()];
let day = date.getDate();
let günler = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let gün = günler[date.getDay()];

let fullDate = gün + "," + month + " " + day;
// console.log(fullDate);

document.getElementById("date").innerText = fullDate;
