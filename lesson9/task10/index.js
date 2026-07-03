function compareObjects(firstObj, secondObj) {
  // put your code here
   const keys1 = Object.keys(firstObj);
  const keys2 = Object.keys(secondObj);

  if (keys1.length !== keys2.length) return false;

  return keys1.every(key => firstObj[key] === secondObj[key]);
}
console.log(compareObjects({name:"Sam", age: 17}, {name:"Sam", age: 17}));
console.log(compareObjects({name:"Sam", age: 17}, {name:"Sam", age: 18}));
console.log(compareObjects({name:"Sam", age: 17}, {}));
