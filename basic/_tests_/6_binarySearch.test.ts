import { expect, test } from "bun:test";
import { binarySearch, recursiveBinarySearch } from "../6_binarySearch";

test("binarySearch", () => {
  expect(binarySearch([1, 2, 3, 4, 5], 3)).toEqual(2);
  expect(binarySearch([1, 2, 3, 4, 5], 5)).toEqual(4);
  expect(binarySearch([1, 2, 3, 4, 5], 6)).toEqual(-1);
  expect(binarySearch([1, 2, 3, 4, 5], 0)).toEqual(-1);
});

test("recursiveBinarySearch", () => {
  expect(recursiveBinarySearch([1, 2, 3, 4, 5], 3)).toEqual(2);
  expect(recursiveBinarySearch([1, 2, 3, 4, 5], 5)).toEqual(4);
  expect(recursiveBinarySearch([1, 2, 3, 4, 5], 6)).toEqual(-1);
  expect(recursiveBinarySearch([1, 2, 3, 4, 5], 0)).toEqual(-1);
});