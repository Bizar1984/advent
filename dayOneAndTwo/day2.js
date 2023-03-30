const { groupCollapsed } = require("console");
const fs = require("fs");

const lines = fs
  .readFileSync("input1.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x);

let validPasswords = 0;

lines.forEach((line) => {
  const { groups } =
    /^(?<min>\d+)-(?<max>\d+) (?<char>.): (?<password>.*)$/.exec(line);

  let counter = {};

  [...groups.password].forEach((char) => {
    if (!counter[char]) {
      counter[char] = 0;
    }
    counter[char]++;
  });

  if (
    counter[groups.char] >= groups.min &&
    counter[groups.char] <= groups.max
  ) {
    validPasswords++;
  }
});

console.log(validPasswords);

// Part two
lines.forEach((line) => {
  const { groups } =
    /^(?<min>\d+)-(?<max>\d+) (?<char>.): (?<password>.*)$/.exec(line);
  if (
    (groups.password[groups.min - 1] == groups.char) ^
    (groups.password[groups.max - 1] == groups.char)
  ) {
    validPasswords++;
  }
});
console.log(validPasswords);
