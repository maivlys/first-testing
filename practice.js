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

function caesarCipher(str, key) {
  if (typeof key !== "number") {
    return "insert a key (number) to encrypt";
  } else if (typeof str !== "string" || str === "") {
    return "nothing to encrypt";
  }
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let cipher = [];
  let arr = str.split("");
  let toPush = "";
  arr.forEach((letter) => {
    if (!alphabet.includes(letter.toLowerCase())) {
      return cipher.push(letter);
    }
    let i = alphabet.indexOf(letter.toLowerCase());
    key = key >= alphabet.length ? key % 26 : key;

    if (i + key >= alphabet.length) {
      toPush = isCapital(letter)
        ? alphabet.at(i + key - alphabet.length).toUpperCase()
        : alphabet.at(i + key - alphabet.length);
    } else {
      toPush = isCapital(letter)
        ? alphabet.at(i + key).toUpperCase()
        : alphabet.at(i + key);
    }
    cipher.push(toPush);
  });

  return cipher.join("");
}

function isCapital(letter) {
  if (letter.toUpperCase() === letter) {
    return true;
  }
  return false;
}

function analyzeArray() {}

module.exports = {
  capitalize,
  reverseString,
  Calculator,
  caesarCipher,
  analyzeArray,
};
