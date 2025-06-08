const {
  capitalize,
  reverseString,
  Calculator,
  caesarCipher,
  analyzeArray,
} = require("./practice");

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

test("caesarCipher", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("", 3)).toBe("nothing to encrypt");
  expect(caesarCipher("")).toBe("insert a key (number) to encrypt");
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  expect(caesarCipher("abc", 0)).toBe("abc");
  expect(caesarCipher("Hello, World!", 0)).toBe("Hello, World!");
  expect(caesarCipher("abc", 26)).toBe("abc");
  expect(caesarCipher("abc", 29)).toBe("def");
  expect(caesarCipher("xyz", 52)).toBe("xyz");
  expect(caesarCipher("   ", 5)).toBe("   ");
  expect(caesarCipher("123", 5)).toBe("123");
  expect(caesarCipher("!@#$%", 5)).toBe("!@#$%");
  expect(caesarCipher("1aB2c!@", 1)).toBe("1bC2d!@");
  expect(caesarCipher("Zebra-123.!", 5)).toBe("Ejgwf-123.!");
  const longString =
    "The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.";
  const expectedLongString =
    "Wkh txlfn eurzq ira mxpsv ryhu wkh odcb grj. Wkh txlfn eurzq ira mxpsv ryhu wkh odcb grj. Wkh txlfn eurzq ira mxpsv ryhu wkh odcb grj.";
  expect(caesarCipher(longString, 3)).toBe(expectedLongString);
  expect(caesarCipher("def", -3)).toBe("abc");
  expect(caesarCipher("abc", -1)).toBe("zab");
  expect(caesarCipher("Hello", -29)).toBe("Ebiil");
  expect(caesarCipher("abc", -26)).toBe("abc");
  expect(caesarCipher("def", -29)).toBe("abc");
});
