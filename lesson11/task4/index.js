const countOccurances = (string, substr)=>{
    let counter = string.split(substr).length - 1;
    
    return counter;
}
console.log(countOccurances("мама мыла раму, раму мыла мама","мама"));
console.log(countOccurances("we are we are we are Ukrainian", "Ukrainian"));