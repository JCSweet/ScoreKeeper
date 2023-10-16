const p1Score = document.querySelector("#p1Score");
const p2Score = document.querySelector("#p2Score");
const p1ScoreBtnUp = document.querySelector("#p1ScoreBtnUp");
const p1ScoreBtnDown = document.querySelector("#p1ScoreBtnDown");
const p2ScoreBtnUp = document.querySelector("#p2ScoreBtnUp");
const p2ScoreBtnDown = document.querySelector("#p2ScoreBtnDown");
const resetBtn = document.querySelector("#resetBtn");
const winConBtn = document.querySelector("#winConBtn");
let p1ScoreValue = 0;
let p2ScoreValue = 0;

p1ScoreBtnUp.addEventListener("click", () => {
    p1ScoreValue+=1;
    p1Score.innerHTML=p1ScoreValue;
});

p2ScoreBtnUp.addEventListener("click", () => {
    p2ScoreValue+=1;
    p2Score.innerHTML=p2ScoreValue;
});

p1ScoreBtnDown.addEventListener("click", () => {
    p1ScoreValue-=1;
    p1Score.innerHTML=p1ScoreValue;
});

p2ScoreBtnDown.addEventListener("click", () => {
    p2ScoreValue-=1;
    p2Score.innerHTML=p2ScoreValue;
});

resetBtn.addEventListener("click", () => {
    p1ScoreValue=0;
    p2ScoreValue=0;
    p1Score.innerHTML=p1ScoreValue;
    p2Score.innerHTML=p2ScoreValue;
});

optionsBtn.addEventListener("click", () => {
   
});



