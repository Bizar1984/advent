// const fs = require("fs");

// function readInput(file) {
//   try {
//     const data = fs.readFileSync(file, "utf8");

//     return data.split("\n").filter((x) => x);
//   } catch (err) {
//     console.error(err);

//     throw err;
//   }
// }

// const input = readInput("./input3.txt");

let testArray = ["0101", "1111", "0000"];

// part 2, had to steal this
const length = testArray[0].length;

function getCount(lines) {
  const zeros = Array(length).fill(0);
  const ones = Array(length).fill(0);

  for (const line of lines) {
    const bits = [...line];
    bits.forEach((bit, index) => {
      if (bit === "0") {
        zeros[index]++;
      } else {
        ones[index]++;
      }
    });
  }

  return { zeros, ones };
}

function getOxygenRating(testArray, index = 0) {
  const { zeros, ones } = getCount(testArray);
  let mostCommonBit = "1";
  if (zeros[index] > ones[index]) {
    mostCommonBit = "0";
  }
  const filtered = testArray.filter((line) => line[index] === mostCommonBit);
  if (filtered.length === 1) {
    return filtered[0];
  }
  return getOxygenRating(filtered, index + 1);
}

function getCO2Rating(testArray, index = 0) {
  const { zeros, ones } = getCount(testArray);
  let leastCommonBit = "0";
  if (zeros[index] > ones[index]) {
    leastCommonBit = "1";
  }
  const filtered = testArray.filter((line) => line[index] === leastCommonBit);
  if (filtered.length === 1) {
    return filtered[0];
  }
  return getCO2Rating(filtered, index + 1);
}

function part2() {
  const oxygenRating = getOxygenRating(testArray);
  const CO2Rating = getCO2Rating(testArray);

  console.log(parseInt(oxygenRating, 2) * parseInt(CO2Rating, 2));
}

part2();
