import { expect, test } from "bun:test";
import { linearSearch } from "../5_linearSearch";

test("linearSearch", () => {
  expect(linearSearch([1, 2, 3, 4, 5], 3)).toEqual(2);
  expect(linearSearch([1, 2, 3, 4, 5], 5)).toEqual(4);
  expect(linearSearch([1, 2, 3, 4, 5], 6)).toEqual(-1);
  expect(linearSearch([1, 2, 3, 4, 5], 0)).toEqual(-1);
});