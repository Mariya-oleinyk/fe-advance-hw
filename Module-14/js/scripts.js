let startBtn = document.querySelector(".start-btn");
let stopBtn = document.querySelector(".stop-btn");
let result = document.querySelector(".text");


let time = 0;
let timer = {};
let start, stop;

function UserTest() {
  this.start = function (){
    timer = setInterval(function (){
      time++;
      result.textContent = time;
    }, 1000);
    this.startTime = time;
  };

  this.stop = function (){
    clearInterval(timer);
    this.stopTime = time;
    let someRes = Math.floor(this.stopTime - this.startTime);
    this.interval = someRes;
  };
};

function Timer (){
  this.startTime = start;
  this.stopTime = stop;
  this.interval = stop - start;
}

Timer.prototype = new UserTest ();
let res = new Timer();


startBtn.addEventListener('click',  res.start());
stopBtn.addEventListener('click', function(){
  res.stop();
  console.log(res);
});


