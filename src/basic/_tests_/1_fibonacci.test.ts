import { expect, test } from 'bun:test';
import { fibonacci, recursiveFibonacci, memoizedRecursiveFibonacci } from '../1_fibonacci';

test('fibonacci', () => {
    expect(fibonacci(0)).toEqual(0);
    expect(fibonacci(1)).toEqual(1);
    expect(fibonacci(2)).toEqual(1);
    expect(fibonacci(5)).toEqual(5);
    expect(fibonacci(10)).toEqual(55);
});

test('recursiveFibonacci', () => {
    expect(recursiveFibonacci(0)).toEqual(0);
    expect(recursiveFibonacci(1)).toEqual(1);
    expect(recursiveFibonacci(2)).toEqual(1);
    expect(recursiveFibonacci(5)).toEqual(5);
    expect(recursiveFibonacci(10)).toEqual(55);
});

test('memoizedRecursiveFibonacci', () => {
    expect(memoizedRecursiveFibonacci(0)).toEqual(0);
    expect(memoizedRecursiveFibonacci(1)).toEqual(1);
    expect(memoizedRecursiveFibonacci(2)).toEqual(1);
    expect(memoizedRecursiveFibonacci(5)).toEqual(5);
    expect(memoizedRecursiveFibonacci(10)).toEqual(55);
});

