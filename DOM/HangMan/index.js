const word = document.querySelectorAll(".middle");
const letters = document.querySelectorAll(".bottom > div");

const hiddenWord = "hello";

const splitedWord = hiddenWord.split("");

const newArrOfLetters = [];

newArrOfLetters.push(splitedWord);

const underLineArr = [];

for (let i = 0; i < splitedWord.length; i++) {
  const underLine = "_";
  splitedWord[i] = underLine;
  underLineArr.push(splitedWord[i]);
  word.innerHTML = underLineArr[i];
}

const isMatchLetters = () => {
  for (let i = 0; i < letters.length; i++) {
    // letters[i].addEventListener("click", () => {
    //   if (underLineArr[i] === letters[i]) {
    //     word.innerHTML ===
    //   }
    // });
  }
};
