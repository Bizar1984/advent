"use strict";
exports.__esModule = true;
exports.binary_search = void 0;
var my_list = [2, 4, 6, 8, 10];
var binary_search = function (list, item) {
  var low = 0;
  var high = list.length - 1;
  while (low <= high) {
    var mid = Math.floor((low + high) / 2);
    var guess = list[mid];
    if (guess === item) {
      console.log("We found number " + guess + " at index " + mid);
      return mid;
    }
    if (guess > item) {
      high = mid - 1;
    }
    if (guess < item) {
      low = mid + 1;
    }
  }
  return null;
};
exports.binary_search = binary_search;
(0, exports.binary_search)(my_list, 8);
