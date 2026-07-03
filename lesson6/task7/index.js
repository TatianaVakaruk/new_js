const FREE_DELIVERY_THRESHOLD = 100;

/**
 * @param {number[]} prices
 * @return {boolean}
 */
function isFreeDelivery(prices) {
  // put your code here
  let sum = 0;
  for (let i = 0; i < prices.length; i++){
    sum +=prices[i];
  }
  if (sum > FREE_DELIVERY_THRESHOLD){
    return true;
  }
  else {
    return false;
  }
}
console.log(isFreeDelivery([20, 25, 30]));
console.log(isFreeDelivery([101]));
console.log(isFreeDelivery([100, 99, 5]));
