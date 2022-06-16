const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector('#time-left');
const scoreDisplay = document.querySelector('#score');

let result = 0;
let hitposition;
let currenTime = 60;

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole');
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
     randomSquare.classList.add('mole');

     hitposition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if(square.id == hitposition) {
            result++;
            scoreDisplay.textContent = result;
            hitposition = null;
        }
    })
})

function moveMole() {
    let timeId = null
    timeId = setInterval(randomSquare, 500)
}

moveMole()

function countDown() {
  currenTime--;
  timeLeft.textContent = currenTime;

  if(currenTime == 0 ) {
      clearInterval(countDownTimerId)
      window.alert('GAME OVER! Your final score is ' + result)
  }
}

let countDownTimerId = setInterval(countDown, 1000);