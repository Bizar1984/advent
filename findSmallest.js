"use strict";
exports.__esModule = true;
exports.findSmallest = void 0;
var my_second_list = [9, 4, 6, 1, 3];
var findSmallest = function (list) {
    var smallestIndex = 0;
    var smallestElement = list[0];
    for (var i = 1; i < list.length; i++) {
        if (list[i] < smallestElement) {
            smallestElement = list[i];
            smallestIndex = i;
        }
    }
    return smallestIndex;
};
exports.findSmallest = findSmallest;
console.log((0, exports.findSmallest)(my_second_list));

<<<<<<< HEAD
// Push testing
=======
// Hello everybody
>>>>>>> main
