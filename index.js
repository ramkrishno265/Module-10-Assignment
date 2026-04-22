// 1) calculateDifference
function calculateDifference(a, b) {
  return a - b;
}
console.log("Difference:", calculateDifference(10, 5));


// 2) isOdd
function isOdd(num) {
  return num % 2 !== 0;
}
console.log("Is Odd:", isOdd(7));


// 3) findMin
function findMin(arr) {
  return Math.min(...arr);
}
console.log("Min Number:", findMin([5, 2, 9, 1, 7]));


// 4) filterEvenNumbers
function filterEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}
console.log("Even Numbers:", filterEvenNumbers([1, 2, 3, 4, 5, 6]));


// 5) sortArrayDescending
function sortArrayDescending(arr) {
  return [...arr].sort((a, b) => b - a);
}
console.log("Sorted Desc:", sortArrayDescending([3, 1, 7, 2, 9]));


// 6) lowercaseFirstLetter
function lowercaseFirstLetter(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}
console.log("Lowercase First:", lowercaseFirstLetter("Hello"));


// 7) findAverage
function findAverage(arr) {
  let sum = arr.reduce((acc, num) => acc + num, 0);
  return sum / arr.length;
}
console.log("Average:", findAverage([10, 20, 30]));


// 8) isLeapYear
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log("Leap Year:", isLeapYear(2024));