"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bubbleSort_1 = require("./bubbleSort");
describe.each([
    [
        [7, 5, 2, 4, 3, 9],
        [2, 3, 4, 5, 7, 9]
    ],
    [
        [9, 7, -5, 4, 3, 1],
        [-5, 1, 3, 4, 7, 9]
    ],
    [
        [1, 2, 3, -4, 5, 6],
        [-4, 1, 2, 3, 5, 6]
    ],
    [
        [81, -2, 99, -763, 57, 3, 4, 9, 70],
        [-763, -2, 3, 4, 9, 57, 70, 81, 99]
    ],
    [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    ]
])("bubbleSort(%p)", (unsortedArr, expectedSortedArr) => {
    test(`returns [${expectedSortedArr.join(", ")}]`, () => {
        expect(bubbleSort_1.bubbleSort(Array.from(unsortedArr))).toEqual(expectedSortedArr);
    });
});
//# sourceMappingURL=bubbleSort.test.js.map