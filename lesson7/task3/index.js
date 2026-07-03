const flatArray= nums =>
 nums.flat().sort((a , b) => a - b);

console.log(flatArray([1, [10, 7], 3]));
console.log(flatArray([[1, 90, 37], 15, 100]));
console.log(flatArray([1, 190, [15, 2, 4, 2]]));
