"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bubbleSort = void 0;
const logger_1 = require("../../utils/logger");
const swapIdx_1 = require("../../utils/swapIdx");
const d = logger_1.dAlgo.extend("bubbleSort");
function bubbleSort(unsortedArr) {
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
                swapIdx_1.swapIdx(unsortedArr, currIdx, nextIdx);
                swapCount++;
                isUnsorted = true;
            }
            d(`Pass %d (complete): %o`, count++, unsortedArr);
        }
        d("*".repeat(3));
        if (!isUnsorted) {
            d("Optimized exit");
            break;
        }
    }
    d("Total Swaps: %d", swapCount);
    d("Sorted: %o", unsortedArr);
    d("*".repeat(40));
    return unsortedArr;
}
exports.bubbleSort = bubbleSort;
//# sourceMappingURL=bubbleSort.js.map