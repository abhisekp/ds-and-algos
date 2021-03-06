"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectionSort = void 0;
const logger_1 = require("../../utils/logger");
const swapIdx_1 = require("../../utils/swapIdx");
const d = logger_1.dAlgo.extend("selectionSort");
function selectionSort(unsortedArr) {
    d("Unsorted %o", unsortedArr);
    let swapCount = 0;
    for (let i = 0; i < unsortedArr.length; i += 1) {
        let minIdx = i;
        for (let currIdx = minIdx + 1; currIdx < unsortedArr.length; currIdx += 1) {
            const min = unsortedArr[minIdx];
            d("minIdx: %d (%d)", minIdx, min);
            const curr = unsortedArr[currIdx];
            d('comparing %d (%d) and %d (%d)', minIdx, min, currIdx, curr);
            if (curr < min) {
                minIdx = currIdx;
                d("New minIdx: %d (%d)", minIdx, curr);
            }
        }
        d(`Swapping indexes [%d (%d) ↔ %d (%d)]`, i, unsortedArr[i], minIdx, unsortedArr[minIdx]);
        swapIdx_1.swapIdx(unsortedArr, i, minIdx);
        swapCount++;
        d('Pass %d (complete): %o', i, unsortedArr);
        d("*".repeat(3));
    }
    d("Total Swaps: %d", swapCount);
    d('Sorted: %o', unsortedArr);
    d("*".repeat(40));
    return unsortedArr;
}
exports.selectionSort = selectionSort;
//# sourceMappingURL=selectionSort.js.map