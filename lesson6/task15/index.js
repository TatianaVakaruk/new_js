function includes(arr, el) {
  // put your code here
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === el){
        return true;
    }
  }
  return false;
}
console.log(includes([1, 2, 5, 6], 10));
console.log(includes([4, 6, 7], 4));
console.log(includes([1, 2, 7, 8], 9));