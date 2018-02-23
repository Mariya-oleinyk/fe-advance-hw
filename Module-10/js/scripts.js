/*
  Создать компонент счетчика времени.
  
  Простой прямоугольник который показывает время
  со старта упражения и до того момента когда все
  клавиши были верно нажаты.
  
  На входе есть строка символов для упражнения.
  
  Написать метод countKPS() который,по окончанию упражнения,
  возвращает кол-во верных клавишь в секунду которое было нажато за
  время выполнения упражнения.
  
  Записать результат в localStorage, но только в том случае если
  он лучше чем тот что уже есть в localStorage.
  
  При повторном посещении страницы надо брать то что записано
  в localStorage и вешать на страницу, это будет компонент
  лучшего результата.
*/

// дается строка и от первого нажатия до посленего
// правильного набранного знака считать время

const lang = "qwerty";
const string = "qryte";
const charsArr = string.split("").reverse();
const timerOutput = document.querySelector(".timer");

let exercise = document.querySelector("#exercise");
exercise.textContent = `Введите строку идентичную - ${string}`;
exercise.appendChild(timerOutput);

let keyboard = document.querySelector("#keyboard");

let time = 0;
let letters = 5;
let userString = [];
let arrMain = [];


let timer = setInterval (function (){
    time++;
    timerOutput.textContent = time;
  }, 1000); 

keyboard.textContent = `Your last result: 5 letters in ${localStorage.getItem("data")} sec`;

function click (e){
  userString.push(e.key);

  if(userString.length <= 5){

    if(charsArr.includes(e.key)){
      arrMain.push(e.key);

      if(arrMain.length == 5){
        for(let i = 0; i < arrMain.length; i++){

          if(arrMain[i] == charsArr[i]){
            clearInterval(timer);
            keyboard.textContent = "";
            keyboard.textContent = `Your result: 5 letters in ${time} sec`;
            localStorage.setItem("data", JSON.stringify(time));
          }
        } 
      }
    }  
  } else {
  clearInterval(timer);
  keyboard.textContent = "You looooooose!";
  }       
};
window.addEventListener("keydown", click);