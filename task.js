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
