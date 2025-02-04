const box = document.querySelectorAll(".idContainer");
const buttons = document.querySelectorAll("button");

let turn = "X";

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    if (buttons[i].innerHTML !== "") return;
    buttons[i].innerHTML = turn;
    turn = turn === "X" ? "O" : "X";
  });
}
console.log(buttons);
