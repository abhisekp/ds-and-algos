"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bubbleSort = void 0;
const logger_1 = require("./logger");
const d = logger_1.dAlgo.extend("bubbleSort");
function swapIdx(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
    return arr;
}
function bubbleSort(unsortedArr) {
    for (let i = unsortedArr.length - 1, count = 1; i >= 0; i -= 1) {
        let unsorted = false;
        for (let j = 0; j < i; j++) {
            const currIdx = j;
            const nextIdx = j + 1;
            d("currIdx: %d, nextIdx: %d", currIdx, nextIdx);
            const curr = unsortedArr[currIdx];
            const next = unsortedArr[nextIdx];
            d("curr: %d, next: %d", curr, next);
            if (curr > next) {
                swapIdx(unsortedArr, currIdx, nextIdx);
                d(`Swapping indexes [%d (%d) ⟺ %d (%d)]`, currIdx, curr, nextIdx, next);
                unsorted = true;
            }
            d(`%d> %s`, count++, unsortedArr.join(", "));
        }
        d("*".repeat(3));
        if (!unsorted) {
            d("Optimized exit");
            break;
        }
    }
    return unsortedArr;
}
exports.bubbleSort = bubbleSort;
//# sourceMappingURL=bubbleSort.js.map