export function factorial(n: number) {
    if (n === 0) {
        return 1;
    }
    
    let result = n;
    for (let i = n - 1; i > 0; i--) {
        result *= i;
    }
    return result;
}

export function recursiveFactorial(n: number, memo = {}): number {
    if (n === 0) {
        return 1
    }
    return n * recursiveFactorial(n - 1);
}


