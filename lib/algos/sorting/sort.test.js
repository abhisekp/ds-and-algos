"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unsorted_sorted_1 = require("./fixtures/unsorted-sorted");
const bubbleSort_1 = require("./bubbleSort");
const selectionSort_1 = require("./selectionSort");
describe.each(unsorted_sorted_1.unsortedSorted)("Sorting Algorithms", (unsortedArr, expectedSortedArr) => {
    describe("Bubble Sort", () => {
        test(`bubbleSort(${unsortedArr}) should return ${expectedSortedArr}`, () => {
            expect(bubbleSort_1.bubbleSort(Array.from(unsortedArr))).toEqual(expectedSortedArr);
        });
    });
    describe("Selection Sort", () => {
        test(`selectionSort(${unsortedArr}) should return ${expectedSortedArr}`, () => {
            expect(selectionSort_1.selectionSort(Array.from(unsortedArr))).toEqual(expectedSortedArr);
        });
    });
});
//# sourceMappingURL=sort.test.js.map