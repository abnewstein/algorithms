import { expect, test } from 'bun:test';
import { isPowerOfTwo } from '../3_powerOfTwo';

test('isPowerOfTwo', () => {
    expect(isPowerOfTwo(1)).toEqual(true);
    expect(isPowerOfTwo(2)).toEqual(true);
    expect(isPowerOfTwo(4)).toEqual(true);
    expect(isPowerOfTwo(3)).toEqual(false);
    expect(isPowerOfTwo(5)).toEqual(false);
    expect(isPowerOfTwo(256)).toEqual(true);
    expect(isPowerOfTwo(257)).toEqual(false);
});