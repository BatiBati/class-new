const container = document.querySelector("#container");
const cube = document.querySelector(".cube");
const button = document.querySelector(".button");
const dices = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
const list = document.querySelector(".list");
let rollNumber = 0;

const rolls = () => {
  button.addEventListener("click", () => {
    const random = Math.floor(Math.random() * 6);
    cube.innerHTML = dices[random];
    listOfRolls();

    // if (random === 0) return (cube.innerHTML = "⚀");
    // if (random === 1) return (cube.innerHTML = "⚁");
    // if (random === 2) return (cube.innerHTML = "⚂");
    // if (random === 3) return (cube.innerHTML = "⚃");
    // if (random === 4) return (cube.innerHTML = "⚄");
    // if (random === 5) return (cube.innerHTML = "⚅");
  });
};
rolls();

const listOfRolls = () => {
  rollNumber++;
  const lists = document.createElement("div");
  lists.classList.add("list");
  container.append(lists);

  const diceCont = document.createElement("div");
  diceCont.classList.add("diceCont");
  diceCont.innerHTML = `Roll: ${rollNumber} `;
  lists.append(diceCont);
};
