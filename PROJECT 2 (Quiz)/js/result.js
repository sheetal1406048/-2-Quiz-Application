//taking the value of score from quiz.js

let myElement = new URLSearchParams(window.location.search);
let score = myElement.get("myScore");
//console.log(score)
score = parseFloat(score);
let scoreElement = document.getElementById("score-mark");
scoreElement.innerText = (score)*2;

let totalMarkElement = document.getElementById("total-mark");
let totalMark = totalMarkElement.innerText;
console.log(totalMark)
totalMark = parseFloat(totalMark)

let percentage = score*2*100/totalMark;
//console.log(score,percentage)
percentage = percentage.toString();
percentage = percentage + "%"


//progressbar
document.getElementById("progressBar").style.width = percentage;