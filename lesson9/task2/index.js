const copyObj = obj => Object.assign({}, obj);
console.log(copyObj({"Tom": 17, "Bob": 23}));
console.log(copyObj({name: "Tom", age: 17}));
console.log(copyObj({name: "Tanya", profession: "frone-end developer & salesperson"}));
