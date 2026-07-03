const getRandomNumbers = (length, min, max) => {
  const ceilMin = Math.ceil(min);
  const floorMax = Math.floor(max);

  
  if (ceilMin > floorMax || length < 0) {
    return null; 
  }

  const result = [];
  
  for (let i = 0; i < length; i++) {
    
    const randomInt = Math.floor(Math.random() * (floorMax - ceilMin + 1)) + ceilMin;
    result.push(randomInt);
  }
  
  return result;
}
console.log(getRandomNumbers(10, 4, 2));
console.log(getRandomNumbers(4, 4.2, 4.5));
console.log(getRandomNumbers(6, 4.2, 6.8));
