function capitalize(str) {
  if (typeof str !== "string" || str.length === 0) {
    return "insert a string";
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function reverseString(str) {
  if (typeof str !== "string" || str.length === 0) {
    return "insert a string";
  }
  let arr = str.split("");
  let reverseArr = arr.reverse();
  let reverseStr = reverseArr.join("");
  return reverseStr;
}

class Calculator {
  add(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      return "insert 2 numbers";
    }
    return a + b;
  }
  substract(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      return "insert 2 numbers";
    }
    return a - b;
  }
  divide(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      return "insert 2 numbers";
    }
    if (b === 0) {
      return "can not divide by zero";
    }
    return a / b;
  }
  multiply(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      return "insert 2 numbers";
    }
    return a * b;
  }
}

module.exports = {
  capitalize,
  reverseString,
  Calculator,
};
