const calcTransactionsSummary = arr => {
    
let totalIncome = arr.reduce((sum, item)=> 
    item.operation === "INCOME" ? sum + item.amount : sum, 0 );

let totalExpence = arr.reduce((sum, item)=>
item.operation === "EXPENCE" ? sum + item.amount : sum, 0);

let balance = totalIncome - totalExpence;

return {totalIncome, totalExpence, balance};
}

console.log(calcTransactionsSummary([
    {userId: 44, amount: 120, operation: "INCOME"},
    {userId: 44, amount: 10, operation: "INCOME"},
    {userId: 44, amount: 40, operation: "EXPENCE"},
    {userId : 44, amount: 150, operation: "EXPENCE"}
]));
console.log(calcTransactionsSummary([
    {userId: 34, amount: 50, operation: "INCOME"},
    {userId: 34, amount: 80, operation: "INCOME"},
    {userId: 34, amount: 120, operation: "EXPENCE"}
]));
console.log(calcTransactionsSummary([
    {userId: 24, amount: 120, operation: "INCOME"},
    {userId: 24, amount: 90, operation: "INCOME"},
    {userId: 24, amount: 30, operation: "EXPENCE"},
    {userId : 24, amount: 15, operation: "EXPENCE"},
    {userId: 24, amount: 300, operation: "INCOME"},
]));
