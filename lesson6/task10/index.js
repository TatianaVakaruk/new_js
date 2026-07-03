const cloneArr = arr => {
  // put your code here
  let mas = [];
  for (let i = 0; i < arr.length; i++){
    mas.push(arr[i]);
  }
  return mas;
}
console.log(cloneArr([1, 2, 3, 4, 5]));
console.log(cloneArr([3, 4, 5, 8]));
console.log(cloneArr([9, 10, 11]));
