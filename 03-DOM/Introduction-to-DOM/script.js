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
  if (guess <= 0) {
    document.querySelector(".game__message").textContent =
      "⛔No Number Entered!";
  } else if (guess === secretNumber) {
    document.querySelector(".game__message").textContent = "🎉 Correct Number";
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector(".game__message").textContent =
        "📈The number is High!";
      score--;
      document.querySelector(".game_score").textContent = score;
    } else {
      document.querySelector(".game__message").textContent =
        "💥You lost the game!";
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector(".game__message").textContent =
        "📉The number is Low!";
      score--;
      document.querySelector(".game_score").textContent = score;
    } else {
      document.querySelector(".game__message").textContent =
        "💥You lost the game!";
    }
  }
});
