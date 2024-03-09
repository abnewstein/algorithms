import { test, expect } from 'bun:test';
import { bubbleSort } from '../bubbleSort';
import { insertionSort } from '../insertionSort';
import { mergeSort } from '../mergeSort';
import { quickSort } from '../quickSort';

const unsortedArray1 = [5, 3, 8, 4, 2, 1, 9, 7, 6];
const unsortedArray2 = [5, 3, -8, 4, -2, 1, -9, 7, 6];
const sortedArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sortedArray2 = [-9, -8, -2, 1, 3, 4, 5, 6, 7];

test('bubbleSort', () => {
    expect(bubbleSort(unsortedArray1)).toEqual(sortedArray1);
    expect(bubbleSort(unsortedArray2)).toEqual(sortedArray2);
});

test('insertionSort', () => {
    expect(insertionSort(unsortedArray1)).toEqual(sortedArray1);
    expect(insertionSort(unsortedArray2)).toEqual(sortedArray2);
});

test('mergeSort', () => {
    expect(mergeSort(unsortedArray1)).toEqual(sortedArray1);
    expect(mergeSort(unsortedArray2)).toEqual(sortedArray2);
});

test('quickSort', () => {
    expect(quickSort(unsortedArray1)).toEqual(sortedArray1);
    expect(quickSort(unsortedArray2)).toEqual(sortedArray2);
});
