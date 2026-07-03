const user = {
  name: 'Tom',
  age: 17,
};

const anotherKey = 'married';

// put your code here
user.hobby = "football";
user[anotherKey] = false;
user["favorite music"] = "rock";
user.address = {};
user.address.country = "Ukraine";
user.address.city = "Kyiv";
user.address.street = "Khreschatyk";
user.address.building = 17;
console.log(user);
