import { unsortedSorted } from "./fixtures/unsorted-sorted";
import { bubbleSort } from "./bubbleSort";
import { bubbleSortRecursive } from "./bubbleSortRecursive";
import { selectionSort } from "./selectionSort";

type NumberArray = number[];
type TestTuple = [NumberArray, NumberArray];

describe.each<TestTuple>(unsortedSorted)(
  "Sorting Algorithms",
  (unsortedArr, expectedSortedArr) => {
    describe("Bubble Sort", () => {
      test(`bubbleSort(${unsortedArr}) should return ${expectedSortedArr}`, () => {
        expect(bubbleSort(Array.from(unsortedArr))).toEqual(expectedSortedArr);
      });

      test(`bubbleSort(${unsortedArr}) [optimized] should return ${expectedSortedArr}`, () => {
        expect(bubbleSort(Array.from(unsortedArr), { optimize: true })).toEqual(
          expectedSortedArr
        );
      });

      test(`bubbleSortRecursive(${unsortedArr}) should return ${expectedSortedArr}`, () => {
        expect(
          bubbleSortRecursive(Array.from(unsortedArr))
        ).toEqual(expectedSortedArr);
      }, 10e3);
    });

    describe("Selection Sort", () => {
      test(`selectionSort(${unsortedArr}) should return ${expectedSortedArr}`, () => {
        expect(selectionSort(Array.from(unsortedArr))).toEqual(
          expectedSortedArr
        );
      });
    });
  }
);
