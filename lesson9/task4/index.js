
function addPropertyV1(userData, userId) {
  // put your code here
  const obj = { ...userData};
  obj.id = userId;
  return obj;
}

function addPropertyV2(userData, userId) {
  // put your code here
  return Object.assign(userData, {id: userId});
}

function addPropertyV3(userData, userId) {
  // put your code here
  
  return Object.assign({id: userId}, userData);
}

function addPropertyV4(userData, userId) {
  // put your code here
  return {...userData, id:userId};
}
console.log(addPropertyV1({name: "Tom"}, 5));
