const monthElement = document.querySelector(".date h1");
const fullDateElement = document.querySelector(".date p");
const daysElement = document.querySelector(".days");

const indexMonth = new Date().getMonth();

const lastDay = new Date(new Date().getFullYear(),indexMonth + 1,0).getDate();

const firstDay = new Date(new Date().getFullYear(),indexMonth,1).getDay() - 1;

// console.log(firstDay);

const months =[
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
    "December"
];

// console.log(months[indexMonth]);
monthElement.innerText = months[indexMonth];
fullDateElement.innerText = new Date().toDateString();

let days = "";

for(let i = firstDay ; i > 0 ; i--){
    days += `<div class="empty"></div>`
}

for(let i = 1; i<=lastDay;i++){
    if(i === new Date().getDate()){
        days += `<div class="today">${i}</div>`;
    }
    else{
        days += `<div>${i}</div>`;
    }
}
daysElement.innerHTML = days;