/* // Selecting element through querrySelector and Changing HTML Text through DOM Manupalating

// Selecting and Changing Text
document.querySelector(".game__message").textContent = "🎉 Correct Number";
// Selecting and Changing Text
document.querySelector(".score").textContent = 10;
// Selecting and Changing Text
document.querySelector(".game__number").textContent = 14;
// Selecting and Changing Text
document.querySelector(".game__input").value = 14;
 */

const secretNumber = 14; // The Correct Secret number
let score = 20;
// Handling Event Click
// When We click on a button, the function will called..
document.querySelector(".btn--primary").addEventListener("click", function () {
  let guess = Number(document.querySelector(".game__input").value);
  // console.log(guess);

  // Will Check Condition, according to that the Status Test will change

  // When 0 or No Input
  if (!guess || guess <= 0) {
    document.querySelector(".game__message").textContent =
      "⛔No Number Entered!";

    // When Player Win
  } else if (guess === secretNumber) {
    document.querySelector(".game__message").textContent = "🎉 Correct Number";
    // Theme Color Change when the Number become true
    document.body.style.background = "#E5F6DF";
    document.querySelector(".game__number").textContent = secretNumber;
    document.querySelector(".game").style.background = "green";
    document.querySelector(".game__number").style.background = "white";
    document.querySelector(".game__number").style.color = "green";
    document.querySelector(".btn--primary").style.background = "white";
    document.querySelector(".btn--primary").style.color = "green";
    document.querySelector(".btn--ghost").style.background = "white";
    document.querySelector(".btn--ghost").style.color = "green";

    // When guess is greater than actual Number
  } else if (guess > secretNumber) {
    score--;
    if (score > 0) {
      document.querySelector(".game__message").textContent =
        "📈The number is High!";
      document.querySelector(".game_score").textContent = score;
      // When score become 0
    } else {
      document.querySelector(".game_score").textContent = 0;
      document.querySelector(".game__message").textContent =
        "💥You lost the game!";
    }

    // When guess is greater than actual Number
  } else if (guess < secretNumber) {
    score--;
    if (score > 0) {
      document.querySelector(".game__message").textContent =
        "📉The number is Low!";

      document.querySelector(".game_score").textContent = score;

      // When score become 0
    } else {
      document.querySelector(".game_score").textContent = 0;
      document.querySelector(".game__message").textContent =
        "💥You lost the game!";
    }
  }
});

// Reset Functionality
const resetGame = function () {
  document.querySelector(".game__number").textContent = "?";
  document.querySelector(".game__message").textContent = "Start guessing...";
  document.body.style.background =
    "radial-gradient(circle at top, #1a1a2e, #0f0f14)";
  document.querySelector(".game").style.background =
    "rgba(255, 255, 255, 0.08)";
  document.querySelector(".game__number").style.background =
    "linear-gradient(135deg, #6ef3d6, #38bdf8)";
  document.querySelector(".game__number").style.color = "black";
  document.querySelector(".btn--primary").style.background =
    "linear-gradient(135deg, #6ef3d6, #38bdf8)";
  document.querySelector(".btn--primary").style.color = "black";
  document.querySelector(".btn--ghost").style.background =
    "rgba(255, 255, 255, 0.08)";
  document.querySelector(".btn--ghost").style.color = "white";

  document.querySelector(".game__input").value = "?";
};
