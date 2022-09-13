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
// const circle = document.getElementById("circle");
// const trash = document.getElementById("trash");
const item = document.querySelector(".list-group-item");

const feedBack = () => {
  feedback.style.display = "inline";
  feedback.innerHTML = "Please Enter To Do Item";
};

const StopFeedback = () => {
  feedback.style.display = "none";
};

const createToDo = () => {
  const myLi = document.createElement("li");
  myLi.setAttribute("class", "list-group-item");

  const myCircle = document.createElement("i");
  myCircle.setAttribute("class", "fa-regular fa-circle");
  myLi.appendChild(myCircle);

  const myP = document.createElement("p");
  myP.setAttribute("class", "text");
  myP.innerHTML = input.value;
  myLi.appendChild(myP);

  const myTrash = document.createElement("i");
  myTrash.setAttribute("class", "fa-solid fa-trash-can");
  myLi.appendChild(myTrash);
  list.insertBefore(myLi, list.children[0]); //? yeni itemları listenin ilk elemanına ekler
  input.value = " ";
};

//? ------Add event handler-------

Add.addEventListener("click", () => {
  if (!input.value) {
    setTimeout(feedBack, 500);
    setTimeout(StopFeedback, 2000);
  } else {
    createToDo();
    // myLi.innerHTML = `<i id="circle" class="fa-regular fa-circle" job="complete"></i>
    //          <p class="text"> ${input.value}</p>
    //          <i id="trash" class="fa-solid fa-trash-can" job="delete"></i>`;

    // list.appendChild(myLi); //? yeni itemları aşağı doğru ekler
  }
  input.focus();
});

//?-----ENTER click-----
input.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    Add.click();
  }
});
//?-----------ALL DELETE--------

clear.addEventListener("click", () => {
  list.innerHTML = " ";
});

//?----------CHECK click----------

//?---------DELETE Click-----------
