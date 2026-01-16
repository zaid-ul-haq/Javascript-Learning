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

const secretNumber = 14;
// Handling Event Click
// When We click on a button, the function will called..
document.querySelector(".btn--primary").addEventListener("click", function () {
  let guess = Number(document.querySelector(".game__input").value);
  console.log(guess);

  if (!guess) {
    document.querySelector(".game__message").textContent =
      "⛔No Number Entered!";
  } else if (guess === secretNumber) {
    document.querySelector(".game__message").textContent = "🎉 Correct Number";
  } else {
    document.querySelector(".game__message").textContent =
      "❌ Incorrect! Try different Number";
  }
});
