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
// Loops
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
//Arrow Functions
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
// Simple function tests
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