function Counter () {
    let a = 0;
    return function () {
        a += 1;
        return console.log(a) ;
    }
}

let count = Counter();
count();//считает сколько было вызовов


let btn1 = document.createElement("button");
let btn2 = document.createElement("button");
btn1.innerText = '0';
btn2.innerText = '0';
function BtnCount () {
    let count = 1;
    return function (){
        this.innerHTML = count;
        return count += 1;

    }
}
btn1.addEventListener('click', BtnCount(this));
btn2.addEventListener('click', BtnCount(this));
document.body.appendChild(btn1);
document.body.appendChild(btn2);//Кнопки с счетчиком нажатий

//Задача 3
//Абзац меняет цвет при нажатии
const colorArr = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];
const textArr = ['Привет мир', 'Нажми на меня', 'Я абзац', 'Вкусная еда'];

function handleChangeColor (){
    let select = 0;

    return function () {
        select += 1;
        if (select === colorArr.length){
            select = 0;
        }
        return this.style.backgroundColor = colorArr[select];
    }
}
textArr.map((item) => {
   let text = document.createElement('p');
   text.innerHTML = item;
   text.addEventListener('click', handleChangeColor());
   document.body.appendChild(text);
});

//Задача 4
//выводит число фибаначи

const btn = document.createElement('button');
const text = document.createElement('div');

function handleChangeNumber() {
    let count = {
        a: 0,
        b: 1
    };
    return function () {
        let sum = count.a + count.b;
        text.innerHTML = sum;
        return count = {
            a: count.b,
            b: sum
        };
    }
}
btn.innerText = 'push';
btn.addEventListener('click', handleChangeNumber());
document.body.appendChild(btn);
document.body.appendChild(text);

const swap = (a, b) => {
  let c = a;
  a = b;
  b = c;
  return {
      a,
      b
  };
};

console.log(swap( 10, 20));

let sumsum = (a) => {
   let b = String(a).split('');
   const myResult = b.reduce((sum, num) => +sum + +num);
   return myResult;
};

console.log(sumsum(34456253245345));

const sweetTask = (x, a) => {
    return a/x;
};

const trueOrNot2 = (a, b, c) => {
    return a < b && b < c;
};

const trueOrNot5 = (x, y) => {
    return (x > 0 && y < 0) || (x < 0 && y > 0);
};

const trueOrNot6 = (x, y) => {
    const a = (x * y % 2);
    const colorArr = ['white', 'black'];
    return colorArr[a];
};

const trueOrNot7 = (x1, y1, x2, y2) => {
    return (x1 + 2 === x2 && y1 + 1 === y2 && y2 <= 8) || (x1 + 1 === x2 && y1 + 2 === y2 && x2 <= 8 && y2 <= 8) || (x1 - 1 === x2 && y1 - 2 === y2 && x2 > 0 && y2 > 0) || (x1 - 2 === x2 && y1 - 1 === y2 && x2 > 0 && y2 > 0);
};

console.log(trueOrNot2(5, 7, 1));

console.log(trueOrNot5(-5, 7));

console.log(trueOrNot6(1, 4));

console.log(trueOrNot7(3, 2, 1, 1));

const ifTask1 = (a, b) => {
    if (a > b) {
        return {a, b};
    } else if (b > a) {
        return {b, a};
    }
};

console.log(ifTask1(10, 3));

const ifTask3 = (a, b) => {
    if (a % 2 === 0  && b % 2 === 0) {
        return a + b;
    } else  {
        return a * b;
    }
};

console.log(ifTask3(4, 11));

const ifTask4 = (a, b, c) => {
    if (a >= b && b >= c) {
        return a + b;
    } else if (a >= c && c>= b) {
        return a + c;
    } else if (b >= c && c >= a) {
        return b + c;
    } else if (b >= a && a >= c) {
        return b + a;
    } else if (c >= b && b >= a) {
        return c + b;
    } else if (c >= a && a >= b) {
        return c + a;
    }
};

console.log( 'sdf ', ifTask4(7, 4, 5));

const ifTask5 = (n) => {
    if (n > 0) {
        return `Положительное целое число ${n}`;
    } else if (n < 0 && n % 2 !== 0) {
        return `отрицательное нечетное число ${n}`;
    } else if (n < 0 && n % 2 === 0) {
        return `отрицательное четное число ${n}`;
    } else if (n === 0) {
        return `Вот такое вот число ${n}`;
    }
};

console.log(ifTask5(0));

const caseFunction1 = (n) => {
    switch (n) {
        case 0: return 'Понедельник';
        case 1: return 'Вторник';
        case 2: return 'Среда';
        case 3: return 'Четверг';
        case 4: return 'Пятница';
        case 5: return 'Суббота';
        case 6: return 'Воскресенье';
    }
};

console.log(caseFunction1(2));

const caseFunction2 = (n) => {
    switch (n) {
        case 0:
        case 1:
        case 11: return "Зима";
        case 2:
        case 3:
        case 4: return "Весна";
        case 5:
        case 6:
        case 7: return "Лето";
        case 8:
        case 9:
        case 10: return "Осень";
    }
};

console.log(caseFunction2(10));

const caseFunction3 = (a, b, n) => {
    switch (n) {
        case 0: return a + b;
        case 1: return a - b;
        case 2: return a * b;
        case 3: return a / b;
    }
};

console.log(caseFunction3(18, 47, 0));

const caseFunction4 = (n) => {
    let a = 0;
    let b = '';
    let c = '';
    switch (true) {
        case n < 20:
            a = n;
            break;
        case n < 30:
            b = 'Двадцать';
            a = n - 20;
            break;
        case n < 40:
            b = 'Тридцать';
            a = n - 30;
            break;
        case n < 50:
            b = 'Сорок';
            a = n - 40;
            break;
        case n < 60:
            b = 'Пятьдесят';
            a = n - 50;
            break;
        case n < 70:
            b = 'Шестьдесят';
            a = n - 60;
            break;
        case n < 80:
            b = 'Семьдесят';
            a = n - 70;
            break;
        case n < 90:
            b = 'Восемьдесят';
            a = n - 80;
            break;
        case n <= 100:
            b = 'Девяносто';
            a = n - 90;
            break;
        default: b = 'больше чем надо';
        break;
    }

    switch (a) {
        case 1:
            c = 'один год';
            break;
        case 2:
            c = 'два года';
            break;
        case 3:
            c = 'три года';
            break;
        case 4:
            c = 'четыре года';
            break;
        case 5:
            c = 'пять лет';
            break;
        case 6:
            c = 'шесть лет';
            break;
        case 7:
            c = 'семь лет';
            break;
        case 8:
            c = 'восемь лет';
            break;
        case 9:
            c = 'девять лет';
            break;
        case 10:
            c = 'десять лет';
            break;
        case 11:
            c = 'одиннадцать лет';
            break;
        case 12:
            c = 'двенадцать лет';
            break;
        case 13:
            c = 'тринадцать лет';
            break;
        case 14:
            c = 'четырнадцать лет';
            break;
        case 15:
            c = 'пятнадцать лет';
            break;
        case 16:
            c = 'шестнадцать лет';
            break;
        case 17:
            c = 'семнадцать лет';
            break;
        case 18:
            c = 'восемнадцать лет';
            break;
        case 19:
            c = 'девятнадцать лет';
            break;
    }
    return b + " " + c;
};

console.log(caseFunction4(30));

const caseFunction5 = (n) => {
    let a = 0;
    let b = '';
    let c = '';
    let d = '';
    switch (true) {
        case n < 200:
            d = 'Сто';
            a = n - 100;
            break;
        case n < 300:
            d = 'Двести';
            a = n - 200;
            break;
        case n < 400:
            d = 'Триста';
            a = n - 300;
            break;
        case n < 500:
            d = 'Четыреста';
            a = n - 400;
            break;
        case n < 600:
            d = 'Пятьсот';
            a = n - 500;
            break;
        case n < 700:
            d = 'Шестьсот';
            a = n - 600;
            break;
        case n < 800:
            d = 'Семьсот';
            a = n - 700;
            break;
        case n < 900:
            d = 'Восемьсот';
            a = n - 800;
            break;
        case n < 1000:
            d = 'Девятьсот';
            a = n - 900;
            break;
        case n >= 1000:
            b = 'больше чем надо';
            break;
    }
    switch (true) {
        case a < 20:
            break;
        case a < 30:
            b = 'двадцать';
            a = a - 20;
            break;
        case a < 40:
            b = 'тридцать';
            a = a - 30;
            break;
        case a < 50:
            b = 'сорок';
            a = a - 40;
            break;
        case a < 60:
            b = 'пятьдесят';
            a = a - 50;
            break;
        case a < 70:
            b = 'шестьдесят';
            a = a - 60;
            break;
        case a < 80:
            b = 'семьдесят';
            a = a - 70;
            break;
        case a < 90:
            b = 'восемьдесят';
            a = a - 80;
            break;
        case a < 100:
            b = 'девяносто';
            a = a - 90;
            break;
    }

    switch (true) {
        case a === 1:
            c = 'один';
            break;
        case a === 2:
            c = 'два';
            break;
        case a === 3:
            c = 'три';
            break;
        case a === 4:
            c = 'четыре';
            break;
        case a === 5:
            c = 'пять';
            break;
        case a === 6:
            c = 'шесть';
            break;
        case a === 7:
            c = 'семь';
            break;
        case a === 8:
            c = 'восемь';
            break;
        case a === 9:
            c = 'девять';
            break;
        case a === 10:
            c = 'десять';
            break;
        case a === 11:
            c = 'одиннадцать';
            break;
        case a === 12:
            c = 'двенадцать';
            break;
        case a === 13:
            c = 'тринадцать';
            break;
        case a === 14:
            c = 'четырнадцать';
            break;
        case a === 15:
            c = 'пятнадцать';
            break;
        case a === 16:
            c = 'шестнадцать';
            break;
        case a === 17:
            c = 'семнадцать';
            break;
        case a === 18:
            c = 'восемнадцать';
            break;
        case a === 19:
            c = 'девятнадцать';
            break;
    }
    return  d + " " + b + " " + c;
};

console.log(caseFunction5(874));

const forFunction1 = (a, b) => {
    let c = 0;
    for (let i = a; i <= b; i++){
        c += i;
    }
    return c;
};
console.log(forFunction1(2, 8));

const forFunction2 = (n) => {
    let c = 0;
    for (let i = 1; i <= n; i++){
        let a = i / 10 + 1;
        c += a;
    }
    return c;
};
console.log(forFunction2(8));

const forFunction3 = (a, n) => {
    let c = 0;
    for (let i = 1; i <= n; i++){
        c += a * i;
    }
    return c;
};
console.log(forFunction3(9, 6));

const forFunction4 = (a, b) => {
    const c = [];
    for (let i = a; i <= b; i++){
        if (i % 3 === 0) {
            c.push(i * 1000);
        }else if (i % 2 === 0){
            c.push(i * -1);
        }else {
            c.push(i);
        }
    }
    return c;
};
console.log(forFunction4(1, 7));

const whileFunction1 = (a, b) => {
    let c = 0;
    while (a <= b) {
        if (a % 2 === 0){
            c += a;
        }
        a++;
    }
    return c;
};

console.log(whileFunction1(1, 12));

const whileFunction2 = (n) => {
    let a = 1;
    let b = 1;
    while (a <= n) {
       b *= a;
       a++;
    }
    return b;
};

console.log(whileFunction2(11));

const whileFunction3 = (n) => {
    let a = 1;
    let b = 1;
    while (b < n) {
            a++;
            b = a * a;
    }
    return a - 1;
};

console.log(whileFunction3(212332));

const whileFunction4 = (a, b, n) => {
    let c = 0;
    while (a <= b) {
        if (a % n === 0){
            c += a * 7
        }else if ((a * a) > (n - 15)) {
            c += a / 2
        }else {
            c += a;
        }
        a++;
    }
    return c;
};

console.log(whileFunction4(24, 65, 32));

let str = 'Это строка с текстом';
console.log(str.length);

let str2 = '    В этой строке   есть лишние  пробелы в начале и  конце      ';
str2.trim();


let str3 = 'В этой строке целых девять слов, вместе с предлогами';
console.log(str3.split(" ").length);

let str4 = 'жил был колобок. он от бабушки ушел. потом песенку спел. а лиса его съела.';
console.log(str4[1].toUpperCase());