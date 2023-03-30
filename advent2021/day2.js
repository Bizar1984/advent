const fs = require("fs");

function readInput(file) {
  try {
    const data = fs.readFileSync(file, "utf8");

    return data.split("\n").filter((x) => x);
  } catch (err) {
    console.error(err);

    throw err;
  }
}

const input = readInput("./input2.txt");

let horizontalPosition = 0;
let depth = 0;
let aim = 0;
// down adds value to aim, up subtracts value to aim...
const commands = {
  down: (value) => {
    aim += value;
  },
  up: (value) => {
    aim -= value;
  },
  forward: (value) => {
    horizontalPosition += value;
    depth += value * aim;
  },
};

const calculatePosition = (input) => {
  input.forEach((current, i) => {
    const line = current.split(" ");
    const command = line[0];
    const value = parseInt(line[1]);

    // Let op syntax voor aanroepen functie!
    commands[command](value);
  });
  console.log(horizontalPosition * depth);
};

calculatePosition(input);
