import { getSquaredArray, getOddNumbers } from "./calculator.js";
import sum from "./calculator.js";

it('should to get squared array', ()=>{
    let result = getSquaredArray([1, 2, 3]);
    expect(result).toEqual([1, 4, 9]);
});

it('should to get odd numbers', () => {
    let result = getOddNumbers([1, 2, 3, 4, 5]);
    expect(result).toEqual([1, 3, 5]);
});

it('should to return sum', () => {
    let result = sum(1, 2);
    expect(result).toEqual(3);
});