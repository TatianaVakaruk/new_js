const from = 2;
const to = 7;
let result = 1;
for (let i = from; i<= to; i++){
if(i % 2 === 1){
    result = result * i;
}
}
console.log(result);
