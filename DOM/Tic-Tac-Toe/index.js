const box = document.querySelectorAll(".idContainer");
const buttons = document.querySelectorAll("button");
const player = document.querySelector(".Player");

const buttonsToFunc = buttons;

let turn = "X";
let winnerArr = [
  [0, 1, 2], // Row 1
  [3, 4, 5], // Row 2
  [6, 7, 8], // Row 3
  [0, 3, 6], // Column 1
  [1, 4, 7], // Column 2
  [2, 5, 8], // Column 3
  [0, 4, 8], // Diagonal 1
  [2, 4, 6], // Diagonal 2
];

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    if (buttons[i].innerHTML !== "") return;
    buttons[i].innerHTML = turn;
    turn = turn === "X" ? "O" : "X";
  });
  console.log(buttons[i]);
}

for (let i = 0; i < winnerArr.length; i++) {
  console.log(winnerArr[i]);
}
