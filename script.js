// const originals = [1, 2, 3];

// Arrow function exmaple

// const doubled = originals.map(item => item * 2);

// console.log(doubled);


// Regular function examble

// function doubleItem(item) {
//   return item * 2;
// }

// console.log(originals.map(doubleItem));


// const x = 1;

// function a() {
//   const y = 2;
//   output(x);
// }

// function b() {
//   const z = 3;
//   output(x);
// }

// function output(value) {
//   const para = document.createElement('p');
//   document.body.appendChild(para);
//   para.textContent = `Value: ${value}`;
// }

// ----------------------------------------------------------------------------------
// Loops - June 09 2022
// ----------------------------------------------------------------------------------

// function pow(x, n) {
//     let result = x

//     for (let i = 1; i < n; i++) {
//         result *= x;
//     }

//     return result;
// }


// let x = prompt("x?", '');
// let n = prompt("n?", '');

// if (n < 1) {
//     alert(`Power ${n} is not supported; please enter a positive integer!`);
// } else {
//     alert( pow(x, n) );
// }

// ----------------------------------------------------------------------------------
//Arrow Functions - June 10 222
// ----------------------------------------------------------------------------------

// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
//   }
  
//   ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
//   );

// Re written


// let ask = (question, yes, no) => {
//     if (confirm(question)) yes();
//     else no();
// }

// ask(
//     "Do you agree?",
//     () => alert("You agreed."),
//     () => alert("You canceled the execution.")
// );

// ----------------------------------------------------------------------------------
// Simple function tests - June 10 2022
// ----------------------------------------------------------------------------------

// let add = (n) => n + 7;

// let multiply = (x, y) => x * y;

// let capitalize = (word) => {
//     let getFirst = word.charAt(0);
//     let capFirst = getFirst.toUpperCase();
//     let removeFirst = word.substr(1);
//     return capFirst + removeFirst;
// }

// let lastChar = (word) => {
//     let getLength = word.length - 1;
//     return word.charAt(getLength);
// }

// ----------------------------------------------------------------------------------
// FizzBuzz - June 11 2022
// ----------------------------------------------------------------------------------

// let answer = parseInt(prompt("Please enter a number you would like to FizzBuzz up to: "));

// for (let i = 1; i <= answer; i++) {
//         if (answer === null || answer === undefined || answer < 0) {
//             alert("Please enter an position integer!")
//         } else if (i % 3 == 0 && i % 5 == 0) {
//             console.log("Fizzbuzz!")
//         } else if (i % 3 == 0) {
//             console.log("Fizz")
//         } else if (i % 5 == 0) {
//             console.log("Buzz")
//         } else {
//             console.log(i)
//         }
// }