function squareArray(arr) {
  // put your code here
  if (!Array.isArray(arr)){
    return null;
  }
  return arr.map(num=> num * num);
}
console.log(squareArray([1, 2, 3, 4]));
console.log(squareArray([3, 4, 5, 6 ,7]));
console.log(squareArray([9, 8, 7]));