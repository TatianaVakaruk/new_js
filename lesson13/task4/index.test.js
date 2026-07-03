import { calc } from "./calculator.js";


it("should return null if expression is not a string", () => {
    let result = calc(1);
    expect(result).toEqual(null);
});

it("should return sum if operation is +", () => {
    let result = calc("1 + 2");
    expect(result).toEqual("1 + 2 = 3");
});

it("should return difference if operation is -", () => {
    let result = calc("3 - 1");
    expect(result).toEqual("3 - 1 = 2");
});

it("should return mult if operation is *", () => {
    let result = calc("3 * 2");
    expect(result).toEqual("3 * 2 = 6");
});

it("should return div if operation is /", () => {
    let result = calc("6 / 2");
    expect(result).toEqual("6 / 2 = 3");
});
