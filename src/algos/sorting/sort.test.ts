import { unsortedSorted } from "./fixtures/unsorted-sorted";
import { bubbleSort } from "./bubbleSort";
import { selectionSort } from "./selectionSort";

type NumberArray = number[];
type TestTuple = [NumberArray, NumberArray];

describe.each<TestTuple>(unsortedSorted)("Sorting Algorithms", (unsortedArr, expectedSortedArr) => {
  describe("Bubble Sort", () => {
    test(`bubbleSort(${unsortedArr}) should return ${expectedSortedArr}`, () => {
      expect(bubbleSort(Array.from(unsortedArr))).toEqual(expectedSortedArr);
    });
  });

  describe("Selection Sort", () => {
    test(`selectionSort(${unsortedArr}) should return ${expectedSortedArr}`, () => {
      expect(selectionSort(Array.from(unsortedArr))).toEqual(expectedSortedArr);
    });
  });
});
