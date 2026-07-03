const getSubArray = (arr, count) => {
  // put your code here
  if (count > arr.length){
    return arr;
  }
  let mas = [];
  for (let i = 0; i < count; i++){
    mas.push(arr[i])
  }
  return mas;
};
console.log(getSubArray([1, 2, 34], 2));
console.log(getSubArray([1, 2, 3, 4, 5, 6], 5));
console.log(getSubArray([3, 4, 5, 6, 8], 8));
