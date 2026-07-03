function increaseEvens(arr, delta) {
  // put your code here
  let mas= [...arr];
  for (let i = 0; i < mas.length; i++){
    if (mas[i] % 2 === 0){
       mas[i]= mas[i] + delta;
    }
    else{
        continue;
    }
  }
  return mas;
}
console.log(increaseEvens([1, 4, 6], 5));
console.log(increaseEvens([1, 2, 3], 2));
console.log(increaseEvens([3, 5, 8], 2));
