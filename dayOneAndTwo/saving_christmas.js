const myInput = [
  1130, 1897, 1850, 1218, 1198, 1761, 1082, 1742, 1821, 1464, 1834, 1413, 1917,
  1746, 1954, 1942, 1560, 1227, 1852, 1976, 1773, 1404, 1824, 1011, 1532, 1306,
  1819, 1739, 1540, 1973, 1436, 1196, 1176, 1856, 1332, 1617, 1895, 1749, 1718,
  1536, 1811, 113, 1008, 1908, 1799, 1914, 1603, 1782, 1980, 1228, 1838, 2006,
  1953, 1846, 1903, 1470, 1774, 1599, 1446, 1324, 1054, 1952, 1928, 1997, 1764,
  1943, 1932, 1615, 1428, 1036, 721, 1097, 1998, 1033, 1892, 1904, 1803, 1825,
  1370, 1836, 1853, 1963, 1469, 1385, 246, 1987, 1153, 178, 1790, 1927, 1139,
  1865, 1804, 1974, 1235, 1681, 1185, 2009, 1894, 1141, 1203, 1808, 1867, 1274,
  1891, 1779, 1342, 1920, 851, 1994, 1975, 1979, 1880, 1647, 1365, 448, 1119,
  1256, 1212, 1268, 1878, 1805, 1889, 1870, 1906, 1959, 1898, 1305, 1559, 1088,
  1845, 1783, 1841, 1864, 1961, 1267, 1437, 1823, 801, 1579, 1538, 1745, 1972,
  1259, 1899, 1517, 1940, 1543, 1882, 1933, 1240, 1608, 1263, 1429, 1197, 1508,
  1631, 1988, 1350, 1638, 1800, 1999, 1822, 1776, 1896, 1610, 1831, 1921, 1535,
  1526, 1491, 1876, 1476, 1945, 1702, 1900, 1814, 1289, 1992, 1859, 1967, 1966,
  1283, 2002, 1195, 1066, 1924, 1968, 1835, 1971, 1977, 1430, 1844, 1465, 1595,
  1957, 1472, 219, 1851, 1955,
];

// Which numbers add up to 2020 and which number you get when multiplying these numbers?
function findSumOfNumbers() {
  for (let i = 0; i < myInput.length; i++) {
    let firstNumber = myInput[i];
    for (let x = i + 1; x < myInput.length; x++) {
      let secondNumber = myInput[x];
      if (firstNumber + secondNumber === 2020) {
        return `${firstNumber} * ${secondNumber} = ${
          firstNumber * secondNumber
        }`;
      }
    }
  }
  return "Sorry! None of the numbers have a sum of 2020";
}

function findSumOfThreeNumbers() {
  for (let i = 0; i < myInput.length; i++) {
    let firstNumber = myInput[i];
    for (let x = i + 1; x < myInput.length; x++) {
      let secondNumber = myInput[x];
      for (let z = x + 1; z < myInput.length; z++) {
        let thirdNumber = myInput[z];

        if (firstNumber + secondNumber + thirdNumber === 2020) {
          return `${firstNumber} * ${secondNumber} * ${thirdNumber} = ${
            firstNumber * secondNumber * thirdNumber
          }`;
        }
      }
    }
  }
  return "Sorry! None of the numbers have a sum of 2020";
}

// console.log(findSumOfThreeNumbers());

const data = [
  { min: 2, max: 6, requiredCharacter: "c", password: "fcpwjqhcgtffzlbj" },
  { min: 6, max: 9, requiredCharacter: "x", password: "xxxtwlxxx" },
  { min: 3, max: 10, requiredCharacter: "q", password: "nfbrgwqlvljgq" },
];

function isNumberBetweenMinAndMax(counter, min, max) {
  return counter >= min && counter <= max;
}

function findIndicesOfCharacter(character, string) {
  return character.indexOf(string) >= 0;
}

function checkValidityPasswords() {
  let validPasswordsCounter = 0;
  for (let i = 0; i < data.length; i++) {
    let characterCounter = 0;

    for (let letter = 0; letter < data[i].password.length; letter++) {
      if (
        // How many times does the password contain the required character?
        findIndicesOfCharacter(
          data[i].requiredCharacter,
          data[i].password[letter]
        ) === true
      ) {
        characterCounter += 1;
      }
    }

    // Does the password meet the min and max requirements?
    if (isNumberBetweenMinAndMax(characterCounter, data[i].min, data[i].max)) {
      validPasswordsCounter += 1;
    }

    characterCounter = 0;
  }
  return validPasswordsCounter;
}

console.log(checkValidityPasswords());
