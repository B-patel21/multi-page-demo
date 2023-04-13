// Button Event Listener
document.getElementById("check-btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Inputs
  let name = document.getElementById("name-in").value;
  console.log(name);
  let answer1 = +document.getElementById("answer1-in").value.toLowerCase();
  console.log(answer1);
  let answer2 = document.getElementById("answer2-in").value.toLowerCase();
  console.log(answer2);
  let answer3 = document.getElementById("answer3-in").value.toLowerCase();
  console.log(answer3);
  let answer4 = document.getElementById("answer4-in").value.toLowerCase();
  console.log(answer4);

  // Check Answer

  if (name) {
    document.getElementById("name-in").style.borderColor = "green ";
  }

  if (answer1 === 12) {
    document.getElementById("answer1-in").style.borderColor = "green ";
    document.getElementById("output-in").value = "correct";
  } else {
    document.getElementById("answer1-in").style.borderColor = "red ";
  }

  if (answer2 === "bamboo") {
    document.getElementById("answer2-in").style.borderColor = "green ";
  } else {
    document.getElementById("answer2-in").style.borderColor = "red ";
  }

  if (answer3 === "pink") {
    document.getElementById("answer3-in").style.borderColor = "green ";
  } else {
    document.getElementById("answer3-in").style.borderColor = "red ";
  }

  if (answer4 === "south-west china") {
    document.getElementById("answer4-in").style.borderColor = "green ";
  } else {
    document.getElementById("answer4-in").style.borderColor = "red ";
  }
}
