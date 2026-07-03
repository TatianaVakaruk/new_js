const buildObject = (key, value)=>{
    let obj = {};
    for(let i = 0; i< key.length; i++){
        obj[key[i]] = value[i];
    }
    return obj;
}
console.log(buildObject([1, 2, 3], [4, 5, 6]));
console.log(buildObject(["name", "age", "profession"], ["Tanya", 41, "front-end developer"]));
console.log(buildObject([1, 2, 3], [11, 22, 33]));
