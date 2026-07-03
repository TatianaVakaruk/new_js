function getAdults(obj){
    let result = {};
for (let key in obj){
    if (obj[key] >= 18){
       result[key] = obj[key];
    }
}
return result;
}
console.log(getAdults({"Tanya": 41, "Ira": 3}));
console.log(getAdults({"Sonya": 39, "Sasha": 25, "Sveta": 9}));
console.log(getAdults({"Julya": 32, "Misha": 38, "Sonya": 6}));
