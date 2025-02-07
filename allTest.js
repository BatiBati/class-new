// const demo = document.querySelector(".demo");
// const countt = document.querySelectorAll(".count");
// console.log(countt);

// for (let i = 0; i < countt.length; i++) {
//   countt[i].innerHTML = "Hi World";
// }

// console.log(countt);

// function myDisplayer(words) {
//   demo.innerHTML = words;
// }

// function myFirst(numb1, numb2) {
//   let sum = numb1 + numb2;
//   myDisplayer(sum);
// }

// function mySecond() {
//   myDisplayer("Second");
// }

// mySecond();
// myFirst(5, 10);

// function counter(count) {}

const countContainer = document.querySelectorAll("#countContainer button");
const value = document.querySelector(".h1");
const resetBtn = document.querySelector("#reset");

for (let i = 0; i < countContainer.length; i++) {
  countContainer[i].addEventListener("click", () => {
    if (countContainer[i].innerHTML === "Decrease") {
      value.innerHTML--;
    } else {
      value.innerHTML++;
    }
  });
}

resetBtn.addEventListener("click", () => {
  value.innerHTML = 0;
});
