const { group } = require("console");
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

const input = readInput("./input1.txt");

let depthHasIncreased = 0;
let groupsOfThreeMeasurements = [];

const createGroupsOfThreeMeasurements = (input) => {
  for (let i = 0; i < input.length - 2; i++) {
    let first = parseInt(input[i]);
    let second = parseInt(input[i + 1]);
    let third = parseInt(input[i + 2]);
    groupsOfThreeMeasurements.push(first + second + third);
  }
};

const calculateDepthIncreases = () => {
  createGroupsOfThreeMeasurements(input);

  for (let j = 0; j < groupsOfThreeMeasurements.length; j++) {
    let firstGroup = groupsOfThreeMeasurements[j];
    let secondGroup = groupsOfThreeMeasurements[j + 1];
    if (secondGroup > firstGroup) {
      depthHasIncreased++;
    }
  }
  return depthHasIncreased;
};

console.log(calculateDepthIncreases());
