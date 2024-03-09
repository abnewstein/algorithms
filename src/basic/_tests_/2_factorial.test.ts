import { expect, test } from 'bun:test';
import { factorial, recursiveFactorial } from '../2_factorial';

test('factorial', () => {
    expect(factorial(0)).toEqual(1);
    expect(factorial(1)).toEqual(1);
    expect(factorial(2)).toEqual(2);
    expect(factorial(5)).toEqual(120);
    expect(factorial(10)).toEqual(3628800);
});

test('recursiveFactorial', () => {
    expect(recursiveFactorial(0)).toEqual(1);
    expect(recursiveFactorial(1)).toEqual(1);
    expect(recursiveFactorial(2)).toEqual(2);
    expect(recursiveFactorial(5)).toEqual(120);
    expect(recursiveFactorial(10)).toEqual(3628800);
});