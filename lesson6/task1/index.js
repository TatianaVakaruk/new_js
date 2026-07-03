function getArrayBounds(mas){
    if (!Array.isArray(mas)){
        return null;
    }
    return [mas.length, mas[0], mas[mas.length - 1]];
}
console.log(getArrayBounds([1, 2, 3, 4, 6]));
console.log(getArrayBounds([3, 2, 1]));
console.log(getArrayBounds([1, 2, 3]));
console.log(getArrayBounds(1));