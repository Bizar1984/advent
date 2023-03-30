const fs = require("fs");

let lines;

try {
  const data = fs.readFileSync("./input5.txt", "utf8");

  lines = data.split("\n");
} catch (err) {
  console.error(err);
}

const binaryLines = lines.map((line) => {
  return line
    .replace(/F/g, "0")
    .replace(/B/g, "1")
    .replace(/L/g, "0")
    .replace(/R/g, "1");
});

binaryLines.sort().reverse();

const row = parseInt(binaryLines[0].slice(0, 7), 2);
const column = parseInt(binaryLines[0].slice(7, 10), 2);
const seatId = row * 8 + column;
console.log(seatId);
