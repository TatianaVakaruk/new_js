function getDuplicates(arr) {
  // put your code here
 const duplicates = []; 
for (let i = 0; i < arr.length; i++) {
  const current = arr[i];
  let count = 0;

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === current) {
      count++;
    }
  }
  if (count > 1) {
    let alreadyAdded = false;
    for (let k = 0; k < duplicates.length; k++) {
      if (duplicates[k] === current) {
        alreadyAdded = true;
        break;
      }
    }
    
    
    if (!alreadyAdded) {
      duplicates.push(current);
    }
  }
}
return duplicates;
}
console.log(getDuplicates([1, 1, 1, 2, 2, 3]));
console.log(getDuplicates([1, 6, 6, 7, 8]));
console.log(getDuplicates([5, 5, 4, 4, 4, 4, 7]));

