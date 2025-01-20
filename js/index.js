// function isEven(a) {
//   const remainder = a % 2;
//   if (remainder === 0) {
//     return "Tegsh";
//   }else if (remainder === 1){
//     return "Sondgoi";
//   }
// }

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

// function dun(a) {
//   if (a <= 100 && a >= 90) {
//     return "A";
//   } else if (a <= 89 && a >= 80) {
//     return "B";
//   } else if (a <= 79 && a >= 70) {
//     return "C";
//   } else if (a <= 69 && a >= 60) {
//     return "D";
//   } else if (a <= 59) {
//     return "F";
//   } else {
//     return "Wrong number";
//   }
// }

// const d = dun(70);
// console.log(d);

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
