function getObjKeys(obj) {
  // put your code here
  let arr = [];
  for (let key in obj){
      arr.push(key);
  }
  return arr;
}
console.log(getObjKeys({name: "Tom", age: 17}));
console.log(getObjKeys({name:"Tanya", interests: "coocking"}));
console.log(getObjKeys({name: "Tanya", proffesion: "js developer"}));
