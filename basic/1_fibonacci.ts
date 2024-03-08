export function fibonacci(n: number) {
    const fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n];
}

export function recursiveFibonacci(n: number): number {
    if (n <= 1) {
        return n;
    }
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

export function memoizedRecursiveFibonacci(n: number): number {
    const _cache: Array<number> = [0, 1];
    const helper = (n: number): number => {
        if (_cache[n] !== undefined) {
            return _cache[n];
        }
        _cache[n] = helper(n - 1) + helper(n - 2);
        return _cache[n];
    }
    const res = helper(n);
    return res;
}