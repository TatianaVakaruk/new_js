function reverseArr(arr) {
  // put your code here
  if(!Array.isArray(arr)){
    return null;
  }
  let mas = [];
  for (let i =  arr.length -1; i >= 0; i--){
        mas.push(arr[i]);
  }
  return mas;
}
console.log(reverseArr([1, 2, 3]));
console.log(reverseArr([7, 8, 9, 10]));
console.log(reverseArr([3, 2, 1]));