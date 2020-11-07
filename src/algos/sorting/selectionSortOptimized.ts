import { dAlgo } from "../../utils/logger";
import { swapIdx } from "../../utils/swapIdx";
import { SortOption } from "../../definitions/SortOption";

const d = dAlgo.extend("selectionSort");

export function selectionSort(
  unsortedArr: number[],
  options: SortOption = {} as SortOption
) {
  d("Unsorted %o", unsortedArr);
  let swapCount = 0;
  for (let i = 0; i < unsortedArr.length; i += 1) {
    let minIdx = i;
    let maxIdx = unsortedArr.length - 1 - i;
    for (let currIdx = minIdx + 1; currIdx < unsortedArr.length; currIdx += 1) {
      const min = unsortedArr[minIdx];
      const max = unsortedArr[maxIdx];
      d("minIdx: %d (%d)", minIdx, min);
      d("maxIdx: %d (%d)", maxIdx, max);
      const curr = unsortedArr[currIdx];
      d("comparing %d (%d) and %d (%d)", minIdx, min, currIdx, curr);
      if (curr < min) {
        minIdx = currIdx;
        d("New minIdx: %d (%d)", minIdx, curr);
      }
    }
    d(
      `Swapping indexes [%d (%d) ↔ %d (%d)]`,
      i,
      unsortedArr[i],
      minIdx,
      unsortedArr[minIdx]
    );
    swapIdx(unsortedArr, i, minIdx);
    swapCount++;
    d("Pass %d (complete): %o", i, unsortedArr);
    d("*".repeat(3));
  }
  d("Total Swaps: %d", swapCount);
  d("Sorted: %o", unsortedArr);
  d("*".repeat(40));
  return unsortedArr;
}
