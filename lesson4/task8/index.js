function sumOfMillions(){
let sum = 0;
for (let i = 1; i <= 10000000; i++){
    sum += i;
}
return sum;
}
console.log(sumOfMillions());
