const word = document.querySelector(".middle");
const letters = document.querySelectorAll(".bottom > div");

const hiddenWord = "hello";

const splitedWord = hiddenWord.split("");

const underLineArr = [];

for (let j = 0; j < splitedWord.length; j++) {
  underLineArr.push("_");
}

word.innerHTML = underLineArr;

for (let i = 0; i < splitedWord.length; i++) {
  if (splitedWord[i] === letters[i]) {
    underLineArr[i].innerHTML = splitedWord[i];
  }
}

for (let i = 0; i < letters.length; i++) {
  letters[i].addEventListener("click", () => {
    if (letters[i] === splitedWord[i])
      return (underLineArr[i] = splitedWord[i]);
  });
}
