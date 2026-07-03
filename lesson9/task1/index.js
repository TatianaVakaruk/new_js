const getAdults = userObj => {
    let userAdult = Object.entries(userObj)
    .filter(ageAdalt=> ageAdalt[1] >= 18);
    return Object.fromEntries(userAdult);

   
}
console.log(getAdults({"Tom": 18, "Sam": 16, "Bob": 23}));
console.log(getAdults({"Ann": 3, "Sam": 18, "Kate": 4, "Angela": 40}));
console.log(getAdults({"Tanya": 41, "Nadya": 51, "Sonya": 6}));
