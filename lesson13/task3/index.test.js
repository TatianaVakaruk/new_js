import min from "./getMinSquareNumber.js";

it("should return min number", ()=>{
    let result = min([2, 8, -777, 16.5]);
    expect(result).toEqual(4);
});

it("should return null if it is string", ()=>{
    let result = min("gffhhfhv");
    expect(result).toEqual(null);
});

it("should return null if it is empty array", ()=>{
    let result = min([]);
    expect(result).toEqual(null);
});