const [decrease, reset, increase] = document.querySelectorAll(
  ".buttonContainer button"
);

const count = document.querySelector(".container p");

let value = 0;

decrease.addEventListener("click", () => {
  value--;
  count.innerHTML = value;
});

reset.addEventListener("click", () => {
  value = 0;
  count.innerHTML = 0;
  count.classList.add("red");
});

increase.addEventListener("click", () => {
  value++;
  count.innerHTML = value;
});

const hello = document.querySelectorAll(".text");

console.log(hello);

for (let i = 0; i < hello.length; i++) {
  hello[i].innerHTML = "Hi";
}

sum(displayPage, 1, 3);

function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}

function displayConsole(result) {
  console.log(result);
}

function displayPage(result) {
  document.getElementById("myH1").textContent = result;
}
