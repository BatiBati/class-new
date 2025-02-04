const input = document.querySelector("input");
const button = document.querySelectorAll("button");
const tipSum = document.querySelector(".tipSum");
const reset = document.querySelector(".reset");
const tipsContainer = document.querySelectorAll(".tipsContainer button");

// --------------- Example - 2 ---------------

const tipValues = [5, 10, 15, 25, 35, 50, 65, 80];

for (const i in tipsContainer) {
  tipsContainer[i].innerHTML = tipValues[i];
}

for (let i = 0; i > tipsContainer.length; i++) {
  tipsContainer[i].addEventListener("click", () => {
    const toNumber = parseFloat(input.value);
    tipSum.innerHTML = toNumber + toNumber * tipValues[i];
  });
}

// --------------- Example - 1 ---------------
// button[0].addEventListener("click", () => {
//   const toNumber = parseFloat(input.value);

//   tipSum.innerHTML = toNumber + toNumber * 0.05;
// });

// button[1].addEventListener("click", () => {
//   const toNumber = parseFloat(input.value);

//   tipSum.innerHTML = toNumber + toNumber * 0.1;
// });

// button[2].addEventListener("click", () => {
//   const toNumber = parseFloat(input.value);

//   tipSum.innerHTML = toNumber + toNumber * 0.15;
// });

// button[3].addEventListener("click", () => {
//   const toNumber = parseFloat(input.value);

//   tipSum.innerHTML = toNumber + toNumber * 0.25;
// });

// button[4].addEventListener("click", () => {
//   const toNumber = parseFloat(input.value);

//   tipSum.innerHTML = toNumber + toNumber * 0.35;
// });

// button[5].addEventListener("click", () => {
//   const toNumber = parseFloat(input.value);

//   tipSum.innerHTML = toNumber + toNumber * 0.5;
// });
// button[6].addEventListener("click", () => {
//   const toNumber = parseFloat(input.value);

//   tipSum.innerHTML = toNumber + toNumber * 0.65;
// });
// button[7].addEventListener("click", () => {
//   const toNumber = parseFloat(input.value);

//   tipSum.innerHTML = toNumber + toNumber * 0.8;
// });

// reset.addEventListener("click", () => {
//   input.value = null;
//   tipSum.innerHTML = null;
// });

// ---------------------------------------------------------------------------
