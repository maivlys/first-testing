const { capitalize, reverseString, Calculator } = require("./practice");

test("capitalize", () => {
  expect(capitalize("string")).toBe("String");
  expect(capitalize("stRinG")).toBe("String");
  expect(capitalize("")).toBe("insert a string");
  expect(capitalize()).toBe("insert a string");
  expect(capitalize(8)).toBe("insert a string");
});

test("reverseString", () => {
  expect(reverseString("string")).toBe("gnirts");
  expect(reverseString("")).toBe("insert a string");
  expect(reverseString()).toBe("insert a string");
  expect(reverseString(8)).toBe("insert a string");
});

test("calculator", () => {
  let calc = new Calculator();
  expect(calc.add(2, -12)).toBe(-10);
  expect(calc.add(-2, "")).toBe("insert 2 numbers");
  expect(calc.add("string")).toBe("insert 2 numbers");
  expect(calc.substract(2, -12)).toBe(14);
  expect(calc.substract(-2, "")).toBe("insert 2 numbers");
  expect(calc.substract("string")).toBe("insert 2 numbers");
  expect(calc.multiply(2, 3)).toBe(6);
  expect(calc.multiply(2, -12)).toBe(-24);
  expect(calc.multiply(-2, "")).toBe("insert 2 numbers");
  expect(calc.multiply("string")).toBe("insert 2 numbers");
  expect(calc.divide(12, 3)).toBe(4);
  expect(calc.divide(12, -2)).toBe(-6);
  expect(calc.divide(-2, "")).toBe("insert 2 numbers");
  expect(calc.divide("string")).toBe("insert 2 numbers");
  expect(calc.divide(2, 0)).toBe("can not divide by zero");
});
