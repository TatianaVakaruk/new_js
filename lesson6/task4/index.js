/**
 * @param {any[]} numbers
 * @return {any[]}
 */
function swap(numbers) {
  // put your code here
  let [start, ...rest] = numbers;
  return [...rest, start];
}

/**
 * @param {any[]} numbers
 * @return {any[]}
 */
function swapManual(numbers) {
  // put your code here
  let anotherNumbers = numbers.slice();
  let firstElement = anotherNumbers.shift();
 anotherNumbers.push(firstElement);
 return anotherNumbers;
}

console.log(swap([1, 2, 3]));
console.log(swap([3, 2, 5]));
console.log(swapManual([11, 22, 33]));
console.log(swapManual([33, 22, 55]));