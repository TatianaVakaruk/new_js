const makeCounter = () => {
    let count = 0;
    return function() {
        return count++;
    }
}
/*let count1 = makeCounter();
console.log(count1());
console.log(count1());
console.log(count1());
let count2 = makeCounter();
console.log(count2());
console.log(count2());*/