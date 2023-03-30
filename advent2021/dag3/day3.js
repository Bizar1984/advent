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

const input = readInput("./input3.txt");

let bitCounter = 0;

// check if value equals one
const hasOne = (row, column) => {
  return input[row][column] === "1";
};

// counting the ones per column
const countingOnes = (startColumn) => {
  let currentColumn = startColumn;

  for (let currentRow = 0; currentRow < input.length; currentRow++) {
    if (hasOne(currentRow, currentColumn)) {
      bitCounter++;
    }
  }

  return bitCounter;
};

// create array with amount of ones per column
let numberOfOnes = [];

const amountOfOnesPerColumn = (input) => {
  for (let i = 0; i < input[0].length; i++) {
    numberOfOnes.push(countingOnes(i));

    bitCounter = 0;
  }
  return numberOfOnes;
};

amountOfOnesPerColumn(input);

// calculate the prevailing bit per column
let binaryString = "";

const calculatePrevailingBit = (array, input) => {
  array.forEach((current, i) => {
    if (parseInt(current) >= input.length / 2) {
      binaryString += "1";
    } else binaryString += "0";
  });
  return binaryString;
};

calculatePrevailingBit(numberOfOnes, input);

// revert the ones and zero's for the "epsilon value"
let epsilonRate = "";
const revertOnesAndZeros = (string) => {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "0") {
      epsilonRate += "1";
    } else if (string[i] === "1") {
      epsilonRate += "0";
    }
  }
  return epsilonRate;
};
revertOnesAndZeros(binaryString);

// small helper functions to convert binary to decimal
const convertBinaryToDecimal = (binary) => {
  return parseInt(binary, 2);
};

const gammaRate = convertBinaryToDecimal(binaryString);
epsilonRate = convertBinaryToDecimal(epsilonRate);
console.log(gammaRate * epsilonRate);
