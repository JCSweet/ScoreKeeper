const p1Score = document.querySelector("#p1Score");
const p2Score = document.querySelector("#p2Score");
const p1ScoreBtnUp = document.querySelector("#p1ScoreBtnUp");
const p1ScoreBtnDown = document.querySelector("#p1ScoreBtnDown");
const p2ScoreBtnUp = document.querySelector("#p2ScoreBtnUp");
const p2ScoreBtnDown = document.querySelector("#p2ScoreBtnDown");
const resetBtn = document.querySelector("#resetBtn");
const winCon = document.getElementById("winConSelect");
const winConDisplay = document.querySelector("#winConText");
const p1Box = document.querySelector("#player1");
const p2Box = document.querySelector("#player2");
const h1 = document.querySelector("h1");
const minWinScore = 1;
const maxWinScore = 100;
let p1ScoreValue = 0;
let p2ScoreValue = 0;
let winConValue = "";
let winningPlayer = "";

// Select Options
for (let i = minWinScore; i <= maxWinScore; i++) {
  const opt = document.createElement("option");
  opt.value = i;
  opt.innerHTML = i;
  winCon.appendChild(opt);
}

// Display Win Con
function winConn(w) {
  winConValue = w;
  if (winConValue != "") {
    winConDisplay.innerHTML = `Playing up to ${winConValue}.`;
  } else {
    winConDisplay.innerHTML = "";
  }
}

// Click Up / Click Down Event Listeners
p1ScoreBtnUp.addEventListener("click", () => {
  p1ScoreValue += 1;
  p1Score.innerHTML = p1ScoreValue;
  console.log(winConValue);
  if (winConValue != "" && p1ScoreValue >= winConValue) {
    winningPlayer = "Player 1";
    win(winningPlayer);
  }
});

p2ScoreBtnUp.addEventListener("click", () => {
  p2ScoreValue += 1;
  p2Score.innerHTML = p2ScoreValue;
  if (winConValue != "" && p2ScoreValue >= winConValue) {
    winningPlayer = "Player 2";
    win(winningPlayer);
  }
});

p1ScoreBtnDown.addEventListener("click", () => {
  p1ScoreValue -= 1;
  p1Score.innerHTML = p1ScoreValue;
});

p2ScoreBtnDown.addEventListener("click", () => {
  p2ScoreValue -= 1;
  p2Score.innerHTML = p2ScoreValue;
});

// Reset Button
resetBtn.addEventListener("click", () => {
  p1ScoreValue = 0;
  p2ScoreValue = 0;
  h1.innerText = "Score Keeper";
  p1Score.innerHTML = p1ScoreValue;
  p2Score.innerHTML = p2ScoreValue;
  p1Box.classList.remove("winner");
  p2Box.classList.remove("winner");
});

// Game Win
function win(p) {
  let winMessage = `${p} wins!!!!`;
  h1.innerText = winMessage;
  if (p === "Player 1") {
    p1Box.classList.add("winner");
    
  } else if (p === "Player 2") {
    p2Box.classList.add("winner");
  }
}
