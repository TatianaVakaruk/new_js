const cleanTransactionsList = transactions => {
    let arr = transactions.filter(el => isFinite(el));
let result = arr.map(str => {
  let num = Number(str); 
  return `$${num.toFixed(2)}`; 
});
return result;
}
console.log(cleanTransactionsList(["    14.1"," "," 14"," 12, 7     ","    15.87     "]));