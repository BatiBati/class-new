// ------------------------------------------------------------------Object------------------------------------------------------------------

// const { finance } = require("faker/lib/locales/en");

// function duplicatedNumber(arr) {
//   const duplicatedNumberSum = {};
//   let duplicated = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if ((duplicated = arr[i])) {
//       duplicatedNumberSum[arr[i]] = duplicated++;
//     }
//   }
//   console.log(duplicatedNumberSum);
// }

// console.log(duplicatedNumber([1, 2, 2, 5, 5, 5, 6, 7, 2]));

// [2, 2, 2, 4, 5];
// [2, 4, 5, 6, 2];
// [2, 2, 4, 5];

//1. Namaig Tom  gedeg bi 20 nastai. Mongol ornoos irsen. Bor ongiin nvdtei. Saaral ongiin nvdnii shil zvvdeg. Sags togloh durtai. Bi gats biy.

// const person = {
//   firstName: "Tom",
//   age: 20,
//   country: "Mongolia",
//   eyeColor: "Bor",
//   glass: "Saaral",
//   sport: "Sags",
// };
// let myInformation = `Namaig ${person.firstName} gedeg.
//                      Bi ${person.age} nastai.
//                      ${person.country}-s irsen.
//                      ${person.eyeColor} ungiin nudtei.
//                      ${person.glass} ungiin shil zuudeg.
//                      ${person.sport} togloh durtai`;
// console.log(myInformation);

// const today = new Date();
// console.log(today.getDate());
// console.log(today.getDay());
// console.log(today.getFullYear());
// console.log(today.getHours());
// console.log(today.getMilliseconds());
// console.log(today.getMinutes());
// console.log(today.getMonth());

// const obj = {
//     method() {},
//   };
//   new obj.method(); // TypeError: obj.method is not a constructor

// let person = {
//   firstname: "Bat",
//   lastname: "Dorj",
//   phonenumber: 88222288,
//   address: {
//     district: "Chingeltei",
//   },
// };

// const a = "firstname";

// console.log(person[a], person["phonenumber"]);

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function herssso () {
//     (this.firstName = "Bat"),
//     (this.lastName = "Dorj"),
//     (this.age = 23),
//     (this.hp = 100);

//   this.shoot = () => {
//     console.log("Shoot" + this.age);
//   };
// }
// console.log(herssso);

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get language() {
    return this.language;
  },
};
person.country = "MGL";
person.city = "UB";
person.district = "BGL";

console.log(person);
