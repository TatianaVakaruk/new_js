function teamAverageAge(ages) {
 if(!Array.isArray(ages)){
    return null;
 }
 let agesWithOnlyNumbers = ages.filter(ages => (typeof ages === 'number') && !Number.isNaN(ages));
 let sumOfAges = agesWithOnlyNumbers.reduce((acc, age)=> acc + age, 0);
 return sumOfAges / agesWithOnlyNumbers.length;
}
console.log(teamAverageAge([1, "1", 2, 3, null]));
console.log(teamAverageAge(["hghj", "3", 4, 2]));
console.log(teamAverageAge([undefined, null, NaN, "gjhjhj"]));

