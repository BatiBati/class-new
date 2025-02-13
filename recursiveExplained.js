// const factorial = (n) => {
//   let sum = 1;
//   for (let i = 1; i <= n; i++) {
//     sum *= i;
//   }
//   return sum;
// };

const { ar } = require("faker/lib/locales");

// const factorialRec = (n) => {
//   if (n === 0) return 1;
//   return n * factorialRec(n - 1);
// };

// console.log(factorialRec(5));

// // factorial(n)
// // n * factorial(n - 1);
// // n * (n - 1) * factorail(n - 2);
// // n * (n - 1) * (n - 2) * factorial(n - 3);
// //

// // n * (n - 1) * (n - 2) * (n - 3) * ...... * factorail(0)

// [
//   {
//     name: "Faga",
//     childs: [
//       {
//         name: "Hero",
//         childs: ["FDSS"],
//       },
//       {
//         name: "Jrio",
//       },
//     ],
//   },
//   {
//     name: "Beru",
//   },
// ];

// const Component = ({ name, childs }) => {
//   return (
//     <div>
//       <p>{name}</p>
//       {childs.map((item) => {
//         return <Component {...item} />;
//       })}
//     </div>
//   );
// };
const arr = [2, 100, 5, 6, 4, 3, 0];
const hello = [2, 100, 5, 6, 4, 3];

// const map = arr.map((el) => {
//   return el * 2;
// });
// console.log(map);

// const filter = arr.filter((arrElement) => {
//   return arrElement < 3;
// });

// console.log(filter);

// arr.forEach((el, i) => {
//   el++;
//   // console.log(el);
// });
// console.log(arr);

const redu = arr.reduce((acc, el) => {
  acc++;
  // if (el < 3) acc++;
  return acc++;
}, 0);
console.log(redu);

// hello.forEach((el, index, arr) => {
//   console.log(el, index, arr);
// });

// const test = [0, 5, -4, 3, 0];
// test.sort((a, b) => {
//   if (a === 0) return -1;
// });
// console.log(test);
