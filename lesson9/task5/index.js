function mergeObjectsV1(firstObj, secondObj) {
  // put your code here
  const obj = {...firstObj};
  return Object.assign(obj, secondObj);
}

function mergeObjectsV2(firstObj, secondObj) {
  // put your code here
  const obj = {...secondObj};
  return Object.assign(obj, firstObj);
}

function mergeObjectsV3(firstObj, secondObj) {
  // put your code here
  return {...firstObj, ...secondObj};
}

function mergeObjectsV4(firstObj, secondObj) {
  // put your code here
  return {...secondObj, ...firstObj};
}
console.log(mergeObjectsV1({1: 1}, {2:2}));
console.log(mergeObjectsV1({3:3, 4: 4}, {5: 5, 6: 6}));
console.log(mergeObjectsV2({7:7}, {8: 8}));
console.log(mergeObjectsV2({10:10}, {11: 11}));
console.log(mergeObjectsV3({13:13}, {14: 14}));
console.log(mergeObjectsV3({15:15}, {16: 16}));
console.log(mergeObjectsV4({16:16}, {17:17}));
console.log(mergeObjectsV4({20:20}, {21:21}));

