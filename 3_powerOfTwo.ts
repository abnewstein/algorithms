function isPowerOfTwo(n: number) {
    if (n < 1) {
        return false;
    }
    while (n > 1) {
        if (n % 2 !== 0) {
            return false;
        }
        n = n / 2;
    }
    return true;
}

console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(4))
console.log(isPowerOfTwo(256))
console.log(isPowerOfTwo(1000))