const fs = require("fs");

try {
  const data = fs.readFileSync("./input4.txt", "utf8");

  passports = data.split("\n\n");
} catch (err) {
  console.error(err);
}

function howManyPassportsAreValid() {
  let validPassports = 0;

  for (let i = 0; i < passports.length; i++) {
    if (
      passports[i].includes("ecl") &&
      passports[i].includes("pid") &&
      passports[i].includes("eyr") &&
      passports[i].includes("hcl") &&
      passports[i].includes("byr") &&
      passports[i].includes("iyr") &&
      passports[i].includes("hgt")
    ) {
      validPassports++;
    }
  }
  return validPassports;
}

console.log(howManyPassportsAreValid());
