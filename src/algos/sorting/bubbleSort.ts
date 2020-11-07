import { SortOption } from '../../definitions/SortOption';
import { dAlgo } from "../../utils/logger";
import { swapIdx } from "../../utils/swapIdx";

const d = dAlgo.extend("bubbleSort");

export function bubbleSort(unsortedArr: number[], options?: SortOption) {
  if (options) {
    d("Sort Options %O", options);
  }
  d("Unsorted %o", unsortedArr);
  let swapCount = 0;
  for (let i = unsortedArr.length - 1, count = 1; i >= 0; i -= 1) {
    let isUnsorted;
    for (let j = 0; j < i; j++) {
      const currIdx = j;
      const nextIdx = j + 1;
      d("currIdx: %d, nextIdx: %d", currIdx, nextIdx);
      const curr = unsortedArr[currIdx];
      const next = unsortedArr[nextIdx];
      d("curr: %d, next: %d", curr, next);
      if (curr > next) {
        d(`Swapping indexes [%d (%d) ↔ %d (%d)]`, currIdx, curr, nextIdx, next);
        swapIdx(unsortedArr, currIdx, nextIdx);
        swapCount++;
        isUnsorted = true;
      }
      d(`Pass %d (complete): %o`, count++, unsortedArr);
    }
    d("*".repeat(3));
    if (options?.optimize && !isUnsorted) {
      d("➥➥➥ Optimized exit");
      break;
    }
  }
  d("Total Swaps: %d", swapCount);
  d("Sorted: %o", unsortedArr);
  d("*".repeat(40));
  return unsortedArr;
}
