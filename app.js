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

//? ----------SELECT ELEMENTS-----------
const clear = document.getElementById("refresh");
const list = document.getElementById("list");
const input = document.getElementById("input");
const Add = document.getElementById("Add-todo");
const feedback = document.querySelector(".feedback");
const circle = document.getElementById("circle");
const trush = document.getElementById("trush");
const item = document.querySelector(".list-group-item");

const feedBack = () => {
  feedback.style.display = "inline";
  feedback.innerHTML = "Please Enter To Do Item";
};

const StopFeedback = () => {
  feedback.style.display = "none";
};

//? ------Add event handler-------

Add.addEventListener("click", () => {
  if (!input.value) {
    setTimeout(feedBack, 500);
    setTimeout(StopFeedback, 2000);
  } else {
    list.innerHTML += `<li class="list-group-item ">  
    <i id="circle" class="fa-regular fa-circle" job="complete"></i>
    <p class="text"> ${input.value}</p>
    <i id="trash" class="fa-solid fa-trash-can" job="delete"></i>
             </li>`;
    input.value = " ";
  }
  input.focus();
});

//?-----ENTER click-----
input.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    Add.click();
  }
});

//?----------CHECK click----------

circle.addEventListener("click", () => {
  list.innerHTML = `  <li class="list-group-item ">  
<i class="fa-solid fa-circle-check" job="complete"></i>
<p class="text"> ${input.value}</p>
<i id="trush" class="fa-solid fa-trash-can" job="delete"></i>
</li>`(input.value).style.textDecoration = "line-through";
});

//?---------DELETE Click-----------

trush.addEventListener("click", () => {
  list.removeChild(item);
});

//?-----------ALL DELETE--------

clear.addEventListener("click", () => {
  list.style.display = "none";
});
