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
