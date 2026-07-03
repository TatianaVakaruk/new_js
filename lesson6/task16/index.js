function removeDuplicates(arr) {
  // put your code here
 const unique = []; 
for (let i = 0; i < arr.length; i++) {
  let isDuplicate = false; 
  for (let j = 0; j < unique.length; j++) {
    if (arr[i] === unique[j]) {
      isDuplicate = true;
      break; 
    }
  }
  if (!isDuplicate) {
    unique.push(arr[i]); 
  }
}
return unique;
}
console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
console.log(removeDuplicates([1, 6, 6, 7, 8]));
console.log(removeDuplicates([5, 5, 4, 4, 4, 4, 7]));
