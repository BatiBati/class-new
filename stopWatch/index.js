const realTime = document.querySelector(".realTime");
const buttons = document.querySelectorAll(".buttonContainer button");

let firstValue = 0;

buttons[0].addEventListener("click", () => {
  const id = setInterval(() => {
    firstValue++;
    realTime.innerHTML = firstValue;
    console.log(firstValue);
  }, 500);
});

buttons[2].addEventListener("click", () => {
  setTimeout(() => {
    firstValue = 0;
    realTime.innerHTML = 0;
  }, timeout);
});

const value = document.querySelector(".realTime");

//
//
//
//
//
//
//

// const id = setInterval(() => {
//   console.log("hello");
//   console.log(id);
// }, 1000);

// setTimeout(() => {
//   clearInterval(id);
// });
