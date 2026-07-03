function increaseEvens(arr, delta) {
  // put your code here
  return arr.map(num=> num % 2 === 0 ? (num + delta) : num);
}
console.log(increaseEvens([1, 2, 3, 4, 5, 6, 8, 20], 10));
console.log(increaseEvens([4, 2, 8, 7, 9, 10, 3], 6));
console.log(increaseEvens([9, 8, 7, 6, 5], 5));