// EXAMPLE 1 - Check if a String contains Numbers in JavaScript

function containsNumber(str) {
  return /\d/.test(str);
}

console.log(containsNumber('hello 42 world')); // 👉️ true
console.log(containsNumber('hello world')); // 👉️ false
console.log(containsNumber('abc 123')); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 2 - Using the [0-9] range syntax instead

// function containsNumber(str) {
//   return /[0-9]/.test(str);
// }

// console.log(containsNumber('hello 42 world')); // 👉️ true
// console.log(containsNumber('hello world')); // 👉️ false
// console.log(containsNumber('abc 123')); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 3 - Check if a string contains numbers using `match()`

// function containsNumbers(str) {
//   return str.match(/\d/) !== null;
// }

// console.log(containsNumbers('hello 123')); // 👉️ true
// console.log(containsNumbers('hello world')); // 👉️ false
// console.log(containsNumbers('abc 123')); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 4 - Getting an array of the matches or null

// function containsNumbers(str) {
//   return str.match(/\d/g);
// }

// // 👇️ [ '1', '2', '3' ]
// console.log(containsNumbers('hello 123'));

// // 👇️ null
// console.log(containsNumbers('hello world'));

// // 👇️ [ '1', '2', '3' ]
// console.log(containsNumbers('abc 123'));

// ------------------------------------------------------------------

// // EXAMPLE 5 - Check if String contains only Numbers in JavaScript

// function containsOnlyNumbers(str) {
//   return /^[0-9]+$/.test(str);
// }

// console.log(containsOnlyNumbers('1234')); // 👉️ true
// console.log(containsOnlyNumbers('123hello123')); // 👉️ false
// console.log(containsOnlyNumbers('123.5')); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 6 - Matching numbers separated by a character, e.g. decimal or comma-separated

// function containsOnlyNumbers(str) {
//   return /^[0-9.,]+$/.test(str);
// }

// console.log(containsOnlyNumbers('1234')); // 👉️ true
// console.log(containsOnlyNumbers('123hello123')); // 👉️ false
// console.log(containsOnlyNumbers('123.5')); // 👉️ true
// console.log(containsOnlyNumbers('123,5')); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 7 - Checking if the string contains only digits or digits separated by periods

// function containsOnlyNumbers(str) {
//   return /^([0-9]+\.)*([0-9]+)$/.test(str);
// }

// console.log(containsOnlyNumbers('1234')); // 👉️ true
// console.log(containsOnlyNumbers('12.34')); // 👉️ true
// console.log(containsOnlyNumbers('12.34.5')); // 👉️ true

// console.log(containsOnlyNumbers('12,34')); // 👉️ false
// console.log(containsOnlyNumbers('12-34-56')); // 👉️ false
