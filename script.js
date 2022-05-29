// let d = new Date();
// document.body.innerHTML = "<h1>Today's date is " + d + "</h1>";

// const myObj = { firsname: "John", lastname: "Doe" };
// console.log(myObj);

// console.log("Yile eats Ethiopian food");
// let x = 10;
// let y = 20;
//x += 5; //x = x+5
//x -= 6; //x=x-5
//x /= 2; //x = x/2
// x %= y;
// console.log(x);
// const strject = "Fresnosite";
// console.log(strject.length);
// console.log(strject[strject.length - 1]);
// console.log(strject[strject.length - 1]);

// const browserType = "mozilla";

// if (browserType.includes("zilla")) {
//   console.log("Found zilla!");
// } else {
//   console.log("No zilla here!");
// }

// const browserTyp = "zilla";

// if (browserType.startsWith("zilla")) {
//   console.log("Found zilla!");
// } else {
//   console.log("No zilla here!");
// }

// const eaxmple = "highland";
// if (eaxmple.startsWith("hi")) {
//   console.log("found match");
// } else {
//   console.log("not match found");
// }
// const browserType = "mozilla";

// if (browserType.endsWith("zilla")) {
//   console.log("Found zilla!");
// } else {
//   console.log("No zilla here!");
// }
//slice()
// console.log(browserType.slice(1, 4));
// "ozi"
// console.log(browserType.slice(1));
// "ozilla"
// console.log(browserType.slice(-2));
// "la"
// console.log(browserType.slice(7));
// ""
// var b = "smoothe";
// console.log(b);
//manupulate DOM with Javascript =change HTML with JS

// var namei = prompt("what is your name?");
// document.getElementById("title").innerHTML = namei;
// console.log(namei);

//numbers in JS
var num1 = 8;
//increment
num1 = num1 + 1;
// num1++;
//decrement
num1--;
// num1 = num1 - 1;
//INCREMENT/DECREMENT BY 10
// num1 += 10;
// console.log(num1);
//MLTIPLY,DIVIDE,REMINDER%
// console.log(num1 % 3);
//FUNCTIONS creat and call the function
// function exampleFun() {
//   console.log("this is an example");
// }
// exampleFun();
//lets create a function that takes in a name and says hello followed by your name
// function hello(yourname) {
//   return "Hello" + " " + yourname; //string Concatenation
// }
// console.log(hello("Jhon"));

// function hi() {
//   var yourname = prompt("what is your name ?");
//   var result = "hello " + yourname;
//   console.log(result);
// }
// hi();
function Pyramid(n) {
  const midpoint = Math.floor((n * 2 - 1) / 2);
  for (i = 0; i < n; i++) {
    let level = " ";
    for (j = 0; j < n * 2 - 1; j++) {
      if (midpoint - i <= j && midpoint + i >= j) {
        level += "#";
      } else {
        level += "-";
      }
    }
    console.log(level);
  }
}
Pyramid(20);
