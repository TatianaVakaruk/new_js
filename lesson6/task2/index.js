function getOrderTotal(prices) {
  // put your code here
  let sum = 0;
  for (let i = 0; i< prices.length; i++){
    sum += prices[i];
  }
  return sum;
}
console.log(getOrderTotal([1, 2, 3]));
console.log(getOrderTotal([150, 50, 50]));
console.log(getOrderTotal([150, 50, 100]));