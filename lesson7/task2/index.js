const sortAsc = arr => {
    if (!Array.isArray(arr)){
        return null;
    }
   return arr.slice().sort((a, b)=> a - b);
}

/**
 * @param {number[]} arr
 * @return {number[]}
 */
const sortDesc = arr=> {
    if (!Array.isArray(arr)){
        return null;
    }
   return arr.slice().sort((a, b)=> b - a);
}

console.log(sortAsc([30, 5, 3, 25, 1]));
console.log(sortDesc([30, 5, 3, 25, 1]));
console.log(sortAsc("bhhhh"));
console.log(sortDesc(""));
