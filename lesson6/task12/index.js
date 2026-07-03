const sortAsc = arr => {
  // put your code here
  if (!Array.isArray(arr)){
    return null;
  }
  let mas = [...arr];
   let swapped;
  for (let i = 0; i < mas.length - 1; i++) {
    swapped = false;
    for (let j = 0; j < mas.length - i - 1; j++) {
      if (mas[j] > mas[j + 1]) {
        // Меняем элементы местами с помощью деструктуризации
        [mas[j], mas[j + 1]] = [mas[j + 1], mas[j]];
        swapped = true;
      }
}
  }
  return mas;
}

/**
 * @param {number[]} arr
 * @return {number[] || null}
 */
const sortDesc = arr => {
  // put your code here
  if (!Array.isArray(arr)){
    return null;
  }
 let swapped;
 let mas = [...arr];
  for (let i = 0; i < mas.length - 1; i++) {
    swapped = false;
    for (let j = 0; j < mas.length - i - 1; j++) {
      if (mas[j] < mas[j + 1]) {
        // Меняем элементы местами с помощью деструктуризации
        [mas[j], mas[j + 1]] = [mas[j + 1], mas[j]];
        swapped = true;
      }
}
  }
  return mas;
}
console.log(sortAsc([3, 6, 1, 8, 4]));
console.log(sortDesc([1, 11, 19, 5, 3]));
console.log(sortAsc("ghhjj"));
console.log(sortDesc(""));