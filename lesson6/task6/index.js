function squareArray(arr) {
  // put your code here
  if (!Array.isArray(arr)){
    return null;
  }
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    let square = arr[i] * arr [i];
    newArr.push(square);
  }
  return newArr;
}
console.log(squareArray([1, 2, 3]));
console.log(squareArray([2, 3, 4]));
console.log(squareArray(1));