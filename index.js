
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let today = date.getDate();

let mainDate = new Date(year, month, today);

let options = {
    era: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
};

const monday = document.getElementById('monday');
const tuesday = document.getElementById('tuesday');
const wednesday = document.getElementById('wednesday');
const thursday = document.getElementById('thursday');
const friday = document.getElementById('friday');
const saturday = document.getElementById('saturday');
const sunday = document.getElementById('sunday');





function monthToString ( month ) {
    let monthString = '';
    switch (month) {
        case 0: monthString = "Январь";
        break;
        case 1: monthString = "Февраль";
            break;
        case 2: monthString = "Март";
            break;
        case 3: monthString = "Апрель";
            break;
        case 4: monthString = "Май";
            break;
        case 5: monthString = "Июнь";
            break;
        case 6: monthString = "Июль";
            break;
        case 7: monthString = "Август";
            break;
        case 8: monthString = "Сентябрь";
            break;
        case 9: monthString = "Октябрь";
            break;
        case 10: monthString = "Ноябрь";
            break;
        case 11: monthString = "Декабрь";
            break;
    }
    return monthString;
}



function handleChangeYear (event) {
    let id = event.target.id;
    if (id === 'leftYearBtn'){
        year = year - 1;
        render();
    }else if (id === 'rightYearBtn'){
        year = year + 1;
        render();
    }else if (id === 'leftMonthBtn'){
        month = month - 1;
        if (month < 0){
            month = 11;
            year = year - 1;
        }
        render();
    }else if (id === 'rightMonthBtn'){
        month = month + 1;
        if (month > 11){
            month = 0;
            year = year + 1;
        }
        render();
    }
}
let startDate = 0;
let finishDate = 0;
function findFirstDay (y, m) {
    let d = new Date(y, m, 1);
    let w = d.getDay();
    switch (w) {
        case 1: startDate = 1;
        finishDate = 42;
        break;
        case 2: startDate = 0;
            finishDate = 41;
            break;
        case 3: startDate = -1;
            finishDate = 40;
            break;
        case 4: startDate = -2;
            finishDate = 39;
            break;
        case 5: startDate = -3;
            finishDate = 38;
            break;
        case 6: startDate = -4;
            finishDate = 37;
            break;
        case 0: startDate = -5;
            finishDate = 36;
            break;
    }
    return startDate;

}

const leftYearBtn = document.getElementById('leftYearBtn');
leftYearBtn.onclick = (event) => handleChangeYear(event);
const rightYearBtn = document.getElementById('rightYearBtn');
rightYearBtn.onclick = (event) => handleChangeYear(event);
const leftMonthBtn = document.getElementById('leftMonthBtn');
leftMonthBtn.onclick = (event) => handleChangeYear(event);
const rightMonthBtn = document.getElementById('rightMonthBtn');
rightMonthBtn.onclick = (event) => handleChangeYear(event);


let imageBox = document.getElementById('imageBox');


function render () {


    let monthString = monthToString(month);

    monday.innerHTML = '<div class="day_box">ПН</div>';
    tuesday.innerHTML = '<div class="day_box">ВТ</div>';
    wednesday.innerHTML = '<div class="day_box">СР</div>';
    thursday.innerHTML = '<div class="day_box">ЧТ</div>';
    friday.innerHTML = '<div class="day_box">ПТ</div>';
    saturday.innerHTML = '<div class="day_box">СБ</div>';
    sunday.innerHTML = '<div class="day_box">ВС</div>';

    let containerYear = document.getElementById('year');
    containerYear.innerHTML = year;

    let containerMonth = document.getElementById('month');
    containerMonth.innerHTML = monthString;

    findFirstDay(year, month);
    let imageStyle = '';

    switch (month) {
        case 11 :
        case 0  :
        case 1  : imageStyle = "winter";
            break;
        case 2 :
        case 3  :
        case 4  : imageStyle = "spring";
            break;
        case 5 :
        case 6  :
        case 7  : imageStyle = "summer";
            break;
        case 8 :
        case 9  :
        case 10  : imageStyle = "autumn";
            break;

    }
    imageBox.className = imageStyle;
    console.log(imageStyle);

    for ( let i = startDate ; i <= finishDate; ++ i){
        let changeDate = new Date(year, month , i);
        let styleArr = "day_box";

        if (changeDate.getFullYear() === date.getFullYear() && changeDate.getMonth() === date.getMonth() && changeDate.getDate() === date.getDate()){
            styleArr = "mainDate"
        }
        if (changeDate.getMonth() !== month){
            styleArr = "secondary"
        }
        if (changeDate.getDay() === 1){
            monday.innerHTML += `<div class=${styleArr}> ${changeDate.getDate()} </div>`;
        }
        else if (changeDate.getDay() === 2){
            tuesday.innerHTML += `<div class=${styleArr}> ${changeDate.getDate()} </div>`;
        }
        else if (changeDate.getDay() === 3){
            wednesday.innerHTML += `<div class=${styleArr}> ${changeDate.getDate()} </div>`;
        }
        else if (changeDate.getDay() === 4){
            thursday.innerHTML += `<div class=${styleArr}> ${changeDate.getDate()} </div>`;
        }
        else if (changeDate.getDay() === 5){
            friday.innerHTML += `<div class=${styleArr}> ${changeDate.getDate()} </div>`;
        }
        else if (changeDate.getDay() === 6){
            saturday.innerHTML += `<div class=${styleArr}> ${changeDate.getDate()} </div>`;

        }
        else if (changeDate.getDay() === 0){
            sunday.innerHTML += `<div class=${styleArr}> ${changeDate.getDate()} </div>`;
        }
    }

}

render();