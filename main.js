// Button Event Listener
document.getElementById("check-btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Inputs
  
  let correct = 0;
  // Check Answer

  let score = 0;
  score += markQuestion(1, "12");
  score += markQuestion(2, "bamboo");
  score += markQuestion(3, "pink");
  score += markQuestion(4, "south-west china");

  document.getElementById("out-score").innerHTML = correct;
  document.getElementById("percent-score").innerHTML = (score / 4) * 100;

  if (correct <= 2) {
    document.getElementById("output").innerHTML = "Try again";
  } 
  if (correct ===3) {
    document.getElementById("output").innerHTML = "Good Job";
  }
  if (correct === 4) {
    document.getElementById("output").innerHTML = "Awesome";
  }
}

function markQuestion(qNum, correctAnswer) {
  let inputEl = document.getElementById(`answer${qNum}`); 
  let feedbackEl = document.getElementById(`feedback${qNum}`);
  let useranswer = inputEl.value.toLowerCase();

  if (useranswer === correctAnswer){
    inputEl.style.border = "2px solid green";
    feedbackEl.innerHTML = "Correct";
    return 1 ; 
  } else {
    inputEl.style.border = "2px solid red";
    feedbackEl.innerHTML= "Incorrect";
    return 0;
  }
}      