function arrayToObject(arr) {
  // put your code here
  let obj = {};
  arr.forEach(el => {
    obj[el] = el;
  });
  return obj;
}

console.log(arrayToObject([1, 2, "text", null]));
console.log(arrayToObject([3, 5, 7]));
console.log(arrayToObject(["text", "arr", "new", 1]));
