// const calc = (action, num1 = 1, num2 = 1) => {
//   switch (action) {
//     case "multiply":
//       return num1 * num2;
//     case "subtract":
//       return num1 - num2;
//     case "add":
//       return num1 + num2;

//     default:
//       console.log("oh Nooes", action);
//       break;
//   }
// };
// console.log("multiply======>", calc(2, 3));
// console.log("subtract======>", calc("subtract"));
// console.log("add======>", calc("add"));

// const countDown = (num) => {
//   if (typeof num !== "number")
//     throw new Error("You must pass a number the argument");

//   if (num < 1) throw new Error("Must pass a number greater than 0");

//   for (let i = num; i > 0; i--) console.log(i);
// };

// const numpy1 = [10];
// const numpy1 = 10;
// countDown(numpy1);

// countDown(7);
// const logEvens = (array) => {
//   if (Array.isArray(array)) {
//     for (let i = 0; i < array.length; i++)
//       typeof array[i] === "number" &&
//         array[i] % 2 === 0 &&
//         console.log(array[i]);
//   } else {
//     throw new Error("you must pass an array as an argument");
//   }
// };
// we can also do it this way so that it checks if is not true then execute the second code

// const logEvens = (array) => {
//   if (!Array.isArray(array))
//     throw new Error("you must pass an array as an argument");

//   for (let i = 0; i < array.length; i++)
//     typeof array[i] === "number" && array[i] % 2 === 0 && console.log(array[i]);
// };

// logEvens([1, 2, 3, 4, 5]);

// factorial
// 0! = 1
// 1! = 1
// 2! = 2 * 1
// 3! = 3 * 2 * 1
// 4! = 4 * 3 * 2 * 1
// 5! = 5 * 4 * 3 * 2 * 1

// if num=0 || num=1 the factorial is 1

// We start the FOR loop with var i = num-1
//  We decrement i after each iteration
function factorial(num) {
  if (num === 0 || num === 1) return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i; //num =num*i
  }
  return num;
}
// console.log(factorial(8));

// function capitalize(word) {
//   return word
//     .split('')
//     .map((letter, index) =>
//       index ? letter.toLowerCase() : letter.toUpperCase(),
//     )
//     .join('');
// }
// Pyramid Excercise

// function ip(num) {
//   for (let i = 0; i < num.length; i++) {
//     return num[0];
//   }
// }
// console.log(ip("123.456.789"));
function countVowels(string, count = 0, i = 0) {
  if (!string[i]) return count;
  if ("aeiou".includes(string[i].toLowerCase())) count++;
  return countVowels(string, count, i + 1);
}
console.log(countVowels(""));

//Write a function that accepts a positive number N. The function should console log a pyramid shape with N levels using the # character. Make sure the pyramid has spaces on both the left and right hand sides.

function pyramid(n) {
  const midpoint = Math.floor((2 * n - 1) / 2);

  for (let row = 0; row < n; row++) {
    let level = "";

    for (let column = 0; column < 2 * n - 1; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        level += "#";
      } else {
        level += " ";
      }
    }

    console.log(level);
  }
}

pyramid(3);
