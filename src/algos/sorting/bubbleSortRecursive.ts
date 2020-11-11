import { SortOption } from "../../definitions/SortOption";
import { SortOrder } from "../../definitions/SortOrder";
import { comparator } from "../../utils/compare";
import { dAlgo } from "../../utils/logger";
import { swapIdx } from "../../utils/swapIdx";

const d = dAlgo.extend("bubbleSort");

export function bubbleSortRecursive(unsortedArr: number[], options?: SortOption) {
  d("Unsorted %o", unsortedArr);
  if (options) {
    d("Sort Options %O", options);
  }

  let swapCount = 0;

  function sort(unsortedArr: number[], start = 0, end = unsortedArr.length): typeof unsortedArr {
    const len = end - start;
    if (len <= 1) {
      return unsortedArr;
    }

    // bubble up large values (largest at end)
    return sort(partialSort(unsortedArr, start, end - 1, options?.order === SortOrder.ASC), start, end - 1);
  }


  function partialSort(unsortedArr: number[], start = 0, end = unsortedArr.length, asc = true): typeof unsortedArr {
    const len = end - start;
    for (
      let currIdx = start + 0;
      comparator(start + currIdx, len) < 0;
      currIdx++
    ) {
      const nextIdx = currIdx + 1;
      d("currIdx: %d, nextIdx: %d", currIdx, nextIdx);
      const curr = unsortedArr[currIdx];
      const next = unsortedArr[nextIdx];
      d("curr: %d, next: %d", curr, next);
      if (comparator(curr, next) > 0) {
        d(`Swapping indexes [%d (%d) ↔ %d (%d)]`, currIdx, curr, nextIdx, next);
        swapIdx(unsortedArr, currIdx, nextIdx);
        swapCount++;
      }
      d(`Pass %d (complete): %o`, currIdx, unsortedArr);
    }
    return unsortedArr;
  }

  const sortedArr = sort(unsortedArr);
  d("Total Swaps: %d", swapCount);
  d("Sorted: %o", unsortedArr);
  d("*".repeat(40));
  return sortedArr;
}
