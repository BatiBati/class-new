// function isEven(a) {
//   const remainder = a % 2;
//   if (remainder === 0) {
//     return "Tegsh";
//   }else if (remainder === 1){
//     return "Sondgoi";
//   }
// }

// const { ar } = require("faker/lib/locales");

// const result = isEven(7);
// console.log(result);

// 1. Өгөгдсөн тоо нь 5-д хуваагддаг үгүйг шалгана уу.
// function isDividebyFive(a) {
//   if (a % 5 === 0) {
//     return "5-d huvaagddag";
//   } else {
//     return "5-d huvaagddagui";
//   }
// }

// const result = isDividebyFive(13);
// console.log(result);

// 2. Өгөгдсөн тоо 1-ээс 100-н хооронд байвал "include" , байхгүй бол "exclude" гэж хэвлэнэ үү .
// function OneToHundred(a){
// if (a >= 1 && a <= 100) {
//     return "include";
// } else {
//     return "exclude";
// }
// }
// const givenNumber = OneToHundred(101);
// console.log(givenNumber);

// 3.3 тооноос хамгийн ихийг нь олж хэвлэнэ үү .

// function numbers(a, b, c) {
//   if (a > b && a > c) {
//     return a;
//   } else if (b > a && b > c) {
//     return b;
//   } else if (c > a && c > b) {
//     return c;
//   }
// }

// const givenNumber = numbers(100, 200, 202);
// console.log(givenNumber);

// 4.Өгөгдсөн жил нь Олимпийн жил мөн бишийг шалгаад хэвлэнэ үү .

// function olympicsYear(a) {
//   const rightOlympicYears = a - 1896;
//   if (rightOlympicYears % 4 === 0) {
//     return "Olympic Year";
//   } else {
//     return "Not Olympic Year";
//   }
// }

// const givenNumber = olympicsYear(1900);
// console.log(givenNumber);

// 5.Өгөгдсөн сурагчийн дүнг A , B , C , D , F бүлэгт ангилж хэвлэнэ үү .

//    80-100, A

//    70-89, B

//    60-69, C

//    50-59, D

//    0-49, F

// function dun(score) {
//   if (score <= 100 && score >= 90) {
//     return "A";
//   } else if (score <= 89 && score >= 80) {
//     return "B";
//   } else if (score <= 79 && score >= 70) {
//     return "C";
//   } else if (score <= 69 && score >= 60) {
//     return "D";
//   } else if (score <= 59) {
//     return "F";
//   } else {
//     return "Wrong number";
//   }
// }

// // const d = dun(70);
// // console.log(d);

// // Switch case return

// function sendMessage(onoo) {
//   const grade = dun(onoo);

//   switch (grade) {
//     case "A":
//       return "Excellent";
//     case "B":
//       return "Good";
//     case "C":
//       return "Average";
//     case "D":
//       return "Poor";
//     default:
//       return "Fail";
//   }
// }
// console.log(sendMessage(79), dun(100));

// 6.Өгөгдсөн сарыг шалгаад тохирох улирлыг хэвлэнэ үү .

// for example : month = 10 / Autumn

// function seasons(months) {
//   if (months === 12) {
//     return "Winter";
//   } else if (months <= 11 && months >= 9) {
//     return "Autumn";
//   } else if (months <= 8 && months >= 6) {
//     return "Summer";
//   } else if (months <= 5 && months >= 3) {
//     return "Spring";
//   } else if (months === 2 || months === 1) {
//     return "Winter";
//   } else {
//     return "Please enter season";
//   }
// }

// const uliral = seasons(2);
// console.log(uliral);
// 7. Яг одоогийн цагийг шалган өглөө бол "Good morning", өдөр бол "Good afternoon", орой бол "Good evening" гэж хэвлэнэ үү .

// function season(time) {
//   if (time >= 1 && time <= 11) {
//     return "Good Morning";
//   } else if (time >= 12 && time <= 18) {
//     return "Good Afternoon";
//   } else if (time >= 19 && time <= 24) {
//     return "Good evening";
//   }
// }

// console.log(season(11));

// 8. Цаг агаарын температур болон "sunny" эсвэл "rainy" гэж өгөгдөх ба бороотой бол "Don't forget your umbrella!",
// нартай бол температур нь 30-аас их бол "It's a hot day!",
// 20-30 градус бол "It's a warm day",
// 20-оос бага бол "It's a bit cool today" гэж хэвлэнэ үү.

// for example : weather = "sunny" temperature = 25 / It's a warm day.
// function weatherFunction(weather, temperature) {
//   if (weather === "rainy") {
//     return "Don't forget your umbrella!";
//   } else if (temperature > 30) {
//     return "It's a hot day!";
//   } else if (temperature >= 20 && temperature < 30) {
//     return "It's a warm day";
//   } else if (temperature < 20) {
//     return "It's a bit cool today";
//   }
// }

// console.log(weatherFunction("sunny", 25));

// 9. Өгөгдсөн насыг шалгаад 18-аас дээш бол "You are old enough to drive", 18-аас доош бол 18 хүрэхэд дутуу байгаа жилтэй нь хамт "You are left with 3 years to drive" гэж хэвлэнэ үү.

// function driveLimitAge(age) {
//   if (age >= 18) {
//     return "You are old enough to drive";
//   } else if (age < 18) {
//     return `You are left with ${18 - age} years to drive`;
//   }
// }
// console.log(driveLimitAge(20));

// 10.Өгөгдсөн гурвалжны гурван талыг зөв эсэхийг шалгана уу .

// 11.Өгөгдсөн үсгийг шалгаад эгшиг бол "vowel" , гийгүүлэгч бол "consonant" гэж хэвлэнэ үү .

// function givenLetter(letter) {
//   if (
//     letter === "a" ||
//     letter === "e" ||
//     letter === "u" ||
//     letter === "i" ||
//     letter === "o"
//   ) {
//     return "Vowel";
//   } else if (
//     !letter === "a" ||
//     !letter === "e" ||
//     !letter === "u" ||
//     !letter === "i" ||
//     !letter === "o"
//   ) {
//     return "consonant";
//   } else {
//     return "Please enter Vowel or Consonant";
//   }
// }
// console.log(givenLetter(2));

// For loop

// for (let i = 0 ; i <= 100; i+=2) {
// // let tegshToo = i+2;
// //   console.log(i % 2 == 0);
// console.log(i);

// }

// function findSum(number) {
//   let plussedNumbers = 0;
//   for (let i = 1; i <= number; i++) {
//     plussedNumbers = plussedNumbers + i;
//   }
//   return plussedNumbers;
// }
// console.log(findSum(5));

// //
// //
// //

// function firstNumber(num) {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     } else if (num % i !== 0) {
//         return true;
//     }
//   }
// //   return true;
// }

// const isFirstNumber = firstNumber(21);
// console.log(isFirstNumber);

// const arr = [2, 4, 6, "ss", true, "2"];

// arr.push("Hello", 15);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// function sumOfEven(arr) {
//   let sumOfArrayIndex = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       sumOfArrayIndex = sumOfArrayIndex + arr[i];
//     }
//   }
//   return sumOfArrayIndex;
// }
// const lastSumOfEvenArray = sumOfEven([2, 45, 32, 44, 67, 12]);
// console.log(lastSumOfEvenArray);

// 1. Өгөгдсөн массивын гишүүдийн нийлбэрийг ол.

// function sumOfNumbers(number) {
//   let sum = 0;
//   for (let i = 0; i <= number.length; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(sumOfNumbers([1, 2, 3, 4]));

// 2. Өгөгдсөн массивын 0-ээс их элементүүдийн нийлбэрийг ол.

// function tegeesIh(num) {
//   let sumOfArr = 0;
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] > 0) {
//       sumOfArr += num[i];
//     }
//   }
//   return sumOfArr;
// }

// let ihToonuud = tegeesIh([-1, -3, 5, 1, -5]);
// console.log(ihToonuud);

// 3. Өгөгдсөн массивын хамгийн бага элементийг ол.

// function less(numb) {
//   let lessNumber = numb[0];
//   for (let i = 0; i < numb.length; i++) {
//     if (numb[i] < lessNumber) {
//       lessNumber = numb[i];
//     }
//   }
//   return lessNumber;
// }
// console.log(less([-1, 2, 4, -12, 200]));

// 4. Өгөгдсөн массивын хамгийн их элемент хэд дэх нь вэ? Хэрэв хамгийн их элементийн тоо 1-ээс олон бол бага дугаарыг нь хэвлэнэ.

// function ih(ihNumb) {
//   let largeNumber = ihNumb[0];
//   let largeNumberIndex = 0;
//   for (let i = 0; i < ihNumb.length; i++) {
//     if (ihNumb[i] >= largeNumber) {
//       largeNumber = ihNumb[i];
//       largeNumberIndex = i;
//     }
//   }
//   return largeNumberIndex;
// }
// console.log(ih([300, 300, 20, 100, 23, 1000, 1000, 23, 324, 1000, 314]));

// 5. Өгөгдсөн Массивийн элэментүүдийг эсрэг дарааллаар буцаа

// function reverse(el) {
//   let reversedLetters = [];
//   for (let i = el.length - 1; i >= 0; i--) {
//     reversedLetters.push(el[i]);
//   }
//   return reversedLetters;
// }
// console.log(reverse(["a", "b", "c", "d", "e"]));

// 6. Хөрш элэментүүдээсээ их буюу орой элэментүүдийн тоог буцаа

// function largeNumber(number) {
//   let oroiToo = 0;

//   for (let i = 1; i < number.length - 1; i++) {
//     if (number[i] > number[i + 1] && number[i] > number[i - 1]) {
//       oroiToo = oroiToo + 1;
//     }
//   }
//   if (number[0] > number[1]) {
//     oroiToo = oroiToo + 1;
//   }
//   if (number.length - 1 > number.length - 2) {
//     oroiToo = oroiToo + 1;
//   }
//   return oroiToo;
// }
// console.log(largeNumber([50, 20, 30, 12, 444, 2, 20, 5, 12, 11, 20]));

// 7. Өгөгдсөн массивийн бүх хосыг хэвлэ.

// function findTwinNumbers(number) {
//   let twinNumbers = [];
//   for (let i = 0; i < number.length; i++) {
//     for (let j = i + 1; j < number.length; j++) {
//       if (number[i] === number[j]) {
//         twinNumbers.push(number[j]);
//       }

//     }
//   }
//   return twinNumbers;
// }
// console.log(findTwinNumbers([1, 2, 4, 55, 1, 55, 4]));

// 8. Массив болон тоо өгөгдөв. Нийлбэр нь өгөгдсөн тоотой тэнцүү байдаг хосын тоог ол.

// function arrayAndNumber(arr, target) {
//   let targetTwinNumbers = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         targetTwinNumbers.push([arr[i], arr[j]]);
//       }
//     }
//   }
//   return targetTwinNumbers;
// }
// console.log(arrayAndNumber([2, 5, 8, 11, 1, 10], 13));

// 9. Өгөгдсөн 2 массивийн огтлолцлыг ол.

// function ogtlol(arr1, arr2) {
//   let sameArr = [];

//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         sameArr.push(arr2[j]);
//       }
//     }
//   }
//   return sameArr;
// }
// console.log(ogtlol([1, 2, 4, 6, 7, 8, 9, 10], [1, 2, 9, 10, 20, 30, 40]));

// 10. Өгөгдсөн массивийн сөрөг тоонуудыг зүүн талд нь байрлуул

// function leftside(arr) {
//   let lowerArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       lowerArr.push(arr[i]);
//     }
//   }
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j] > 0) {
//       lowerArr.push(arr[j]);
//     }
//   }
//   return lowerArr;
// }
// console.log(leftside([1, 2, -6, 3, -1, -5]));

// 11. Дараалсан тоонуудаас бүрдэх массив өгөгдөх байсан боловч 1 тоо нь дутуу байв. Тэр тоог ол

function lostedNumber(arr) {
  let maxNumber = arr[0];
  let minNumber = arr[0];
  let newArr = [];
  let arrSum = 0;
  let newArrSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minNumber) {
      minNumber = arr[i];
    }
  }
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > maxNumber) {
      maxNumber = arr[j];
    }
  }

  for (let k = minNumber; k <= maxNumber; k++) {
    newArr.push(k);
  }

  for (let q = 0; q < arr.length; q++) {
    arrSum = arrSum + arr[q];
  }

  for (let u = 0; u < newArr.length; u++) {
    newArrSum = newArrSum + newArr[u];
  }
  let lostedNumberr = newArrSum - arrSum;
  return lostedNumberr;
}

console.log(lostedNumber([9, 10, 1, 2, 3, 4, 5, 7, 8, 11, 12]));
//  console.log(lostedNumber([9, 10, 1, 2, 3, 4, 6, 7, 8]));
