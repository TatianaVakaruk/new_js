import { getAdults, reverseArr, withdraw } from "./index.js";

it('should return reverce', ()=> {
    let result = reverseArr([1, 2, 3]);
    expect(result).toEqual([3, 2, 1]);
});

it('should return reverce', ()=> {
    let result = reverseArr([6, 9, 12]);
    expect(result).toEqual([12, 9, 6]);
});

it('should return reverce', ()=> {
    let result = reverseArr([4, 3, 2]);
    expect(result).toEqual([2, 3, 4]);
});

it("should return adults people", ()=> {
    let result = getAdults({"Ann": 78, "Boris": 15, "Kate": 38});
    expect(result).toEqual({"Ann": 78, "Kate": 38});
});

it("should return adults people", ()=> {
    let result = getAdults({"Ann": 16, "Boris": 90, "Kate": 7});
    expect(result).toEqual({"Boris": 90});
});

it("should return adults people", ()=> {
    let result = getAdults({"Ann": 48, "Boris": 2, "Kate": 5});
    expect(result).toEqual({"Ann": 48});
});

it("should return diff", ()=> {
    let result = withdraw("Ann", 900);
    expect(result).toEqual(500);
});

it("should return diff", ()=> {
    let result = withdraw("Tanya", 900);
    expect(result).toEqual(-1);
});

it("should return diff", ()=> {
    let result = withdraw("Andrey", 9000);
    expect(result).toEqual(-1);
});
