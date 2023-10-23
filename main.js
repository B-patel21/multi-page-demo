// Button Event Listener
document.getElementById("check-btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Inputs
  let name = document.getElementById("name-in").value;
  console.log(name);
  let answer1 = document.getElementById("answer1-in").value.toLowerCase();
  console.log(answer1);
  let answer2 = document.getElementById("answer2-in").value.toLowerCase();
  console.log(answer2);
  let answer3 = document.getElementById("answer3-in").value.toLowerCase();
  console.log(answer3);
  let answer4 = document.getElementById("answer4-in").value.toLowerCase();
  console.log(answer4);
  let correct = 0;
  // Check Answer

  let score = 0;
  score += markQuestion(answer1, "12");
  score += markQuestion(answer2, "bamboo");
  score += markQuestion(answer3, "pink");
  score += markQuestion(answer4, "south-west china");

  document.getElementById("out-score").innerHTML = correct;
  document.getElementById("percent-score").innerHTML = (correct / 4) * 100;

  if (correct <= 2) {
    document.getElementById("output");
  }
  if (correct > 2 && correct < 3) {
    document.getElementById("output");
  }
  if (correct === 4) {
    document.getElementById("output");
  }
}

function markQuestion(qNum, correctAnswer) {
  let userAnswer = document.getElementById("answer" + ${qNum}).value.toLowerCase; 
  let feedbackEl = document.getElementById("feedback").value;
  let mark = 0;

  if (userAnswer === correctAnswer) {
    feedbackEl.innerHTML = "Correct!";
    feedbackEl.style.color = "green";
    mark = 1;
  } else {
    feedbackEl.innerHTML = "Incorrect. Correct answer is " + correctAnswer;
    feedbackEl.style.color = "red";
  }

  return mark;
}