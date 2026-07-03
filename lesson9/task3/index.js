const getKeys = obj => {
   return Object.keys(obj);
}

console.log(getKeys({name: "Tanya", profession: "front-end developer & salesperson", age: 41}));
console.log(getKeys({name: "Anya", age: 17}));
console.log(getKeys({name: "Tom", interests: "football"}));
