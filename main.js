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

  if (name) {
    document.getElementById("name-in").style.borderColor = "green ";
  }

  if (answer1 === "12") {
    correct++;
    document.getElementById("answer1-in").style.borderColor = "green ";
    document.getElementById("q1-response").innerHTML = "Correct. Nice Job!";
  } else {
    document.getElementById("answer1-in").style.borderColor = "red ";
    document.getElementById(
      "q1-response"
    ).innerHTML = `Incorrect. Correct answer is 12`;
  }

  if (answer2 === "bamboo") {
    correct++;
    document.getElementById("answer2-in").style.borderColor = "green ";
    document.getElementById("q2-response").innerHTML = "Correct. Nice Job!";
  } else {
    document.getElementById("answer2-in").style.borderColor = "red ";
    document.getElementById(
      "q2-response"
    ).innerHTML = `Incorrect. Correct answer is bamboo`;
  }

  if (answer3 === "pink") {
    correct++;
    document.getElementById("answer3-in").style.borderColor = "green ";
    document.getElementById("q3-response").innerHTML = "Correct. Nice Job!";
  } else {
    document.getElementById("answer3-in").style.borderColor = "red ";
    document.getElementById(
      "q3-response"
    ).innerHTML = `Incorrect. Correct answer is pink`;
  }

  if (answer4 === "south-west china") {
    correct++;
    document.getElementById("answer4-in").style.borderColor = "green ";
    document.getElementById("q4-response").innerHTML = "Correct. Nice Job!";
  } else {
    document.getElementById("answer4-in").style.borderColor = "red ";
    document.getElementById(
      "q4-response"
    ).innerHTML = `Incorrect. Correct answer is south-west China`;
  }

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

// function markQuestion(qNum, correctAnswer) {
//   let userElement = document.getElementById("answer" + ${qNum}).value; 
//   let feedbackEl = document.getElementById()
//   let marks = 0
//   if (userElement === correctAnswer){
//     return marks = 1
//     document.getElementById()
//   }
// }