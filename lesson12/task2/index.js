const reverseString = string => {
    let arrStr = '';
    arrStr = string.split("");
    let reversed = arrStr.reverse();

    return reversed.join('');
}
console.log(reverseString("abc"));
