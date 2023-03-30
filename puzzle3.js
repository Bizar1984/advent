const fs = require("fs");

var area;

try {
  const data = fs.readFileSync("./input_3.txt", "utf8");

  area = data.split("\n");
} catch (err) {
  console.error(err);
}

function hasTree(row, column) {
  // Is it a tree
  return area[row][column] === "#";
}
function getNumberOfTreesOnMyPath(jumpColumn, jumpRow) {
  let currentColumn = 0;
  let treeCounter = 0;
  // start row and start column can be variable...

  for (let currentRow = 0; currentRow < area.length; currentRow += jumpRow) {
    if (hasTree(currentRow, currentColumn)) {
      treeCounter++;
    }

    // currentColumn = (currentColumn + jumpColumn) % area[0].length
    // stapjes van drie naar rechts. Bij 33 wordt de currentColumn gereset naar 2
    // length is 31, maar de laatste index is 30. Verwarrend. Stapjes van 4
    // moet het bij '32' beginnen bij 1, omdat na de laatste geldige index 28
    // je 29, 30, 0, 1! krijgt...
    console.log(area[0].length);
    currentColumn += jumpColumn;
    // stapjes van 1 naar rechts, hij wordt groter dan de laatste index 30 als currentColumn 31 is
    // nieuwe column wordt dan 31 - 31, want hij moet weer beginnen bij index 0!

    if (currentColumn > area[0].length - 1) {
      currentColumn = currentColumn - area[0].length;
    }
  }
  return treeCounter;
}

// 4385176320

function getNumberOfTreesOnDifferentPaths() {
  return (
    getNumberOfTreesOnMyPath(1, 1) *
    getNumberOfTreesOnMyPath(3, 1) *
    getNumberOfTreesOnMyPath(5, 1) *
    getNumberOfTreesOnMyPath(7, 1) *
    getNumberOfTreesOnMyPath(1, 2)
  );
}

console.log(getNumberOfTreesOnDifferentPaths());
