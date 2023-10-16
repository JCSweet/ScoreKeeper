const p1Score = document.querySelector("#p1Score");
const p2Score = document.querySelector("#p2Score");
const p1ScoreBtn = document.querySelector("#p1ScoreBtn");
const p2ScoreBtn = document.querySelector("#p2ScoreBtn");
const resetBtn = document.querySelector("#resetBtn");
const winConBtn = document.querySelector("#winConBtn");
let p1ScoreValue = 0;
let p2ScoreValue = 0;

p1ScoreBtn.addEventListener("click", () => {
    p1ScoreValue+=1;
    p1Score.innerHTML=p1ScoreValue;
});

p2ScoreBtn.addEventListener("click", () => {
    p2ScoreValue+=1;
    p2Score.innerHTML=p2ScoreValue;
});

resetBtn.addEventListener("click", () => {
    p1ScoreValue=0;
    p2ScoreValue=0;
    p1Score.innerHTML=p1ScoreValue;
    p2Score.innerHTML=p2ScoreValue;
});

