var timer = 60;
var score = 0;
var hitrn = 0;

function updateScore(points) {
  score += points;
  document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble() {
  var clutter = "";

  for (var i = 1; i <= 184; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector(".pbtm").innerHTML = clutter;
}

function runTimer() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerint);
      document.querySelector(".pbtm").innerHTML = `Your Score: ${score}`;
    }
  }, 1000);
}

document.querySelector(".pbtm").addEventListener("click", function (event) {
  var clickedNum = Number(event.target.textContent);
  if (clickedNum === hitrn) {
    updateScore(10);
    makeBubble();
    getNewHit();
  } else {
    updateScore(-10);
  }
});

// Initialize game
runTimer();
makeBubble();
getNewHit();
