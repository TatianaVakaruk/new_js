function pickProps(obj, arr) {
  let result = {};
  
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i];
    
    if (key in obj) {
      result[key] = obj[key];
    }
  }
  
  return result;
}
console.log(pickProps({1:"1", 2:"2", 3:"3"}, [1, 3]));
console.log(pickProps({name:"Tom", interests: "football", age: 13}, ["name", "age"]));
console.log(pickProps({name:"Tanya", proffesion:"front-end developer"}, ["name", "proffesion"]));
