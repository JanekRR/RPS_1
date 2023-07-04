const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const resultText = document.getElementById("result");

function getUserChoice(choice) {
  let userChoice;
  switch (choice) {
    case "rock":
      userChoice = "k";
      break;
    case "paper":
      userChoice = "p";
      break;
    case "scissors":
      userChoice = "s";
      break;
  }
  playGame(userChoice);
}

function getComputerChoice() {
  const choices = ["k", "p", "s"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "Remis!";
  } else if (
    (userChoice === "k" && computerChoice === "s") ||
    (userChoice === "p" && computerChoice === "k") ||
    (userChoice === "s" && computerChoice === "p")
  ) {
    return "Wygrałeś!";
  } else {
    return "Komputer wygrał!";
  }
}

function playGame(userChoice) {
  const computerChoice = getComputerChoice();
  const result = determineWinner(userChoice, computerChoice);
  resultText.textContent = `Twój wybór: ${userChoice.toUpperCase()}. ${result}`;
}

rockBtn.addEventListener("click", () => getUserChoice("rock"));
paperBtn.addEventListener("click", () => getUserChoice("paper"));
scissorsBtn.addEventListener("click", () => getUserChoice("scissors"));
