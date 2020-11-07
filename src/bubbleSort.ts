import { dAlgo } from "./logger";

const d = dAlgo.extend("bubbleSort");

function swapIdx(arr: unknown[], i: number, j: number) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
  return arr;
}

export function bubbleSort(unsortedArr: number[]) {
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

/*
function runTest(test) {
  const unsortedArr = test[0];
  const expectedSortedArr = test[1];
  console.log(unsortedArr.join(", "), `<--- [${unsortedArr.length}]`);
  const sortedArr = bubbleSort(Array.from(unsortedArr));
  console.log(sortedArr.join(", "), "<---");

  expect(sortedArr).to.deep.equal(expectedSortedArr);
}

tests.forEach(test => {
  runTest(test);
  console.log("-".repeat(40));
});
 */
