// Button Event Listener
document.getElementById("check-btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Inputs
  let answer1 = document.getElementById("answer1-in").value.toLowerCase();
  console.log(answer1);

  // Check Passcode
  if (answer1 === bamboo) {
    document.getElementById("answer1-in").style.backgroundColor = "green ";
  } else {
    document.getElementById("answer1-in").style.backgroundColor = "red ";
  }
}
