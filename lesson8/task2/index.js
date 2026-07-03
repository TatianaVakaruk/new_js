function getObjValues(obj) {
  // put your code here
  let arr = [];
  for (let key in obj){
    arr.push(obj[key]);
  }
  return arr;
}
console.log(getObjValues({name: "Tome", age: "17", interests: "football",}));
console.log(getObjValues({name: "Ann", age: 15, interests: "cooking",}));
console.log(getObjValues({name: "Arma", age: 2, interests: "play with ball",}));
