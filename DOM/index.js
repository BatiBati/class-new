const buttons = document.querySelectorAll(".container button");
const count = document.querySelector(".container p");

let value = 0;

buttons[0].addEventListener("click", () => {
  value--;
  count.innerHTML = value;
});

buttons[1].addEventListener("click", () => {
  value = 0;
  count.innerHTML = 0;
  count.classList.add("red");
});

buttons[2].addEventListener("click", () => {
  value++;
  count.innerHTML = value;
});

console.log(count);


