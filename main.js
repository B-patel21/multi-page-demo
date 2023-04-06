// Button Event Listener
document.getElementById("check-btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Inputs
  let answer1 = document.getElementById("answer1-in").value;

  // Check Passcode
  if (answer1 === 12) {
    document.getElementById("answer1-in").style.borderColor = "green ";
  } else {
    document.getElementById("answer1-in").style.borderColor = "red ";
  }
}
