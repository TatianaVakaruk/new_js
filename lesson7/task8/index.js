function getOrderTotal(prices) {
  // put your code here
 return prices.reduce((acc, num)=> acc + num, 0);
}
console.log(getOrderTotal([1, 2, 3]));
console.log(getOrderTotal([2, 4, 6]));
console.log(getOrderTotal([6, 4, 2]));