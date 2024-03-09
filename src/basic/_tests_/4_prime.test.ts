import { expect, test } from "bun:test";
import { isPrime } from "../4_prime";

test("isPrime", () => {
  expect(isPrime(1)).toEqual(false);
  expect(isPrime(2)).toEqual(true);
  expect(isPrime(3)).toEqual(true);
  expect(isPrime(4)).toEqual(false);
  expect(isPrime(5)).toEqual(true);
  expect(isPrime(51)).toEqual(false);
  expect(isPrime(53)).toEqual(true);
  expect(isPrime(59)).toEqual(true);
});