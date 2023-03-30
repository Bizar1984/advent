const fs = require("fs");

try {
  const data = fs.readFileSync("./input4.txt", "utf8");

  lines = data.split("\n\n");
} catch (err) {
  console.error(err);
}

function isYearValid(input, min, max) {
  const year = parseInt(input);
  return !(isNaN(year) || year < min || year > max);
}

function isHeightValid(input) {
  if (input.substring(input.length - 2) === "cm") {
    const height = parseInt(input.substring(0, 3));
    // Check if first three characters are NOT a number and/or number is too low/ too high
    // If either one of these statements is true, we want to return false
    return !(isNaN(height) || height < 150 || height > 193);
  } else {
    const height = parseInt(input.substring(0, 2));
    return !(isNaN(height) || height < 59 || height > 76);
  }
}

function isHairColorValid(input) {
  return /^#[0-9a-f]{6}$/.test(input);
}

function isEyeColorValid(input) {
  const eyeColors = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
  return eyeColors.indexOf(input) !== -1;
}

function isPassportIDValid(input) {
  // If we use parseInt here, we do not get the right answer
  // Damn leading zero's....
  return /^\d{9}$/.test(input);
}

class Passport {
  static mandatory = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

  static fieldValidators = {
    byr: (input) => isYearValid(input, 1920, 2002),
    iyr: (input) => isYearValid(input, 2010, 2020),
    eyr: (input) => isYearValid(input, 2020, 2030),
    hgt: (input) => isHeightValid(input),
    hcl: (input) => isHairColorValid(input),
    ecl: (input) => isEyeColorValid(input),
    pid: (input) => isPassportIDValid(input),
    cid: (input) => true,
  };

  constructor(input) {
    this.map = new Map();
    const list = input.split(/\s+/g);
    list.forEach((keyvalue) => {
      const [key, value] = keyvalue.split(":");
      if (key) this.map.set(key, value);
    });
  }
  isValid() {
    return Passport.mandatory.every((key) => this.map.has(key));
  }

  isFullyValid() {
    return (
      this.isValid() &&
      [...this.map.entries()].every(([key, value]) =>
        Passport.fieldValidators[key](value)
      )
    );
  }
}
let valid = 0;

for (const line of lines) {
  const passport = new Passport(line);
  if (passport.isFullyValid()) valid++;
}
console.log(valid);
