const filterArr = numbers => 
    numbers.filter(num => num % 3 === 0);

console.log(filterArr([1, 3, 7, 9, 8, 18, 3, 9]));
console.log(filterArr([3, 1, 2, 7, 6, 5, 21, 24]));
console.log(filterArr([9, 6, 3, 2, 12, 4]));
