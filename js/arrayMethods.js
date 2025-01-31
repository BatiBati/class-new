// Filter Method------------------------
// const array = [1, 2, 4, 3, 5, 6];

// const lowerThan4 = array.filter((el, index) => {
//   return el > 4 && index > 2;
// });

// const myFilter = (arr, callback) => {
//   let newArr = [arr];
// };

// const result = myFilter([2, 1, 4, 5, 3], (element, index) => {
//   return index > 1 && element < 3;
// });
// MAP Method------------------------
// const arr = [
//   {
//     arr1: [1, 2],
//     arr2: [3, 4],
//   },
//   {
//     arr1: [6, 7],
//     arr2: [8, 9],
//   },
// ];

// const result = arr.map((element) => {
//   return {
//     arr1: element.arr1.map((element) => {
//       return element * element;
//     }),
//     arr2: element.arr2.filter((element) => {
//       return element > 7;
//     }),
//   };
// });
// console.log(result);

// ForEach Method------------------------

// Sort Method------------------------

// const arr = [2, 3, 4, 1, 6];
// const result = arr.sort((a, b) => {
//   //   if (a < b) return -1;
//   //   if (a > b) return 1;
//   //   if (a === b) return 0;
//   return a - b;
// });
// console.log(arr);

// const arr = [0, 5, -4, 3, 0];
// const result = arr.sort((a, b) => {
//   if (a !== 0 && b !== -4) return 1;
//   if (a == 0) return -1;
// });
// console.log(arr);

// Reduce Method------------------------

const arr = [0, 5, -4, 3, 0];

console.log(arr);
