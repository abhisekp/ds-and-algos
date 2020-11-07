"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swapIdx = void 0;
function swapIdx(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
    return arr;
}
exports.swapIdx = swapIdx;
//# sourceMappingURL=swapIdx.js.map