function getSpecialNumbers(start, end){
let specialNumbers = [];
for (let i = start; i<= end; i++){
    if (i % 3 === 0){
        specialNumbers.push(i);
    }
    else{
        continue;
    }
}
return specialNumbers;
}
console.log(getSpecialNumbers(2, 10));
console.log(getSpecialNumbers(3, 15));
console.log(getSpecialNumbers(-15, -3));