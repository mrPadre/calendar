
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let today = date.getDate();
console.log('дата', date);

const monday = document.getElementById('monday');
const tuesday = document.getElementById('tuesday');
const wednesday = document.getElementById('wednesday');
const thursday = document.getElementById('thursday');
const friday = document.getElementById('friday');
const saturday = document.getElementById('saturday');
const sunday = document.getElementById('sunday');


let start = -5;
let changeDate = new Date(year, month , 1);
let arrMon = [];
let arrTus = [];
let arrWen = [];
let arrThu = [];
let arrFri = [];
let arrSat = [];
let arrSun = [];

let a = changeDate.getDay();
console.log('месяц', a);


for ( let i = 1 ; i <= 31; i++){
    changeDate.setDate(i);
    if (changeDate.getDay() === 1){
        arrMon.push(changeDate.getDate());
    }
    else if (changeDate.getDay() === 2){
        arrTus.push(changeDate.getDate());
    }
    else if (changeDate.getDay() === 3){
        arrWen.push(changeDate.getDate());
    }
    else if (changeDate.getDay() === 4){
        arrThu.push(changeDate.getDate());
    }
    else if (changeDate.getDay() === 5){
        arrFri.push(changeDate.getDate());
    }
    else if (changeDate.getDay() === 6){
        arrSat.push(changeDate.getDate());
    }
    else if (changeDate.getDay() === 0){
        arrSun.push(changeDate.getDate());
    }
}

arrMon.map((item) => {
monday.innerHTML += `<div class="day_box"> ${item} </div>`;
});
arrTus.map((item) => {
    tuesday.innerHTML += `<div class="day_box"> ${item} </div>`;
});
arrWen.map((item) => {
    wednesday.innerHTML += `<div class="day_box"> ${item} </div>`;
});
arrThu.map((item) => {
    thursday.innerHTML += `<div class="day_box"> ${item} </div>`;
});
arrFri.map((item) => {
    friday.innerHTML += `<div class="day_box"> ${item} </div>`;
});
arrSat.map((item) => {
    saturday.innerHTML += `<div class="day_box"> ${item} </div>`;
});
arrSun.map((item) => {
    sunday.innerHTML += `<div class="day_box"> ${item} </div>`;
});

