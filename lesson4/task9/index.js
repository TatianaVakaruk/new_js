let sum = 0;
for (let i = 0; i <= 1000; i += 1){
  sum += i;
}
//console.log(sum);
let result1 = (sum - sum % 1234) / 1234;
let result2 = sum % 1234;
result1 > result2 ? console.log(true) :console.log(false);