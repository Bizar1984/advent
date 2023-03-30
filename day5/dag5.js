const { errorMonitor } = require("events");
const fs = require("fs");

const readEntries = async () => {
  const data = await fs.readFileSync("./input5.txt", { encoding: "utf-8" });
  return data.split("\n");
};

function binaryFind(str, lowerHalf, upperHalf, maxExclusive) {
  low = 0;
  high = maxExclusive;
  for (let char of str) {
    const mid = Math.floor((low + high) / 2);

    if (char === lowerHalf) {
      // take lower half
      high = mid;
    } else if (char === upperHalf) {
      // take upper half
      low = mid;
    }
  }
  return low;
}

const solve = async () => {
  const lines = await readEntries();
  const seatIds = lines.map((line) => {
    const rowString = line.slice(0, 7);
    const columnString = line.slice(7);
    const rowNumber = binaryFind(rowString, "F", "B", 128);
    const columnNumber = binaryFind(columnString, "L", "R", 8);
    return rowNumber * 8 + columnNumber;
  });

  const maxSeatid = Math.max(...seatIds);

  seatIds.sort((a, b) => (a > b ? 1 : -1));
  for (let i = 0; i < seatIds.length - 1; i++) {
    const firstSeat = seatIds[i];
    const secondSeat = seatIds[i + 1];
    if (secondSeat - firstSeat > 1) {
      const emptySeat = firstSeat + 1;
      return `Empty seat found at ${emptySeat} and max seatId ${maxSeatid}`;
    }
  }
};

// FBFBFBB

solve().then(console.log);
