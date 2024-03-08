function fibonacci(n: number) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

function recursiveFibonacci(n: number) {
    if (n <= 1) {
        return n;
    }
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

function memoRecFib(n: number, res = [0, 1, 1]) {
    if (res[n]) {
        return res[n];
    }
    res[n] = memoRecFib(n - 1, res) + memoRecFib(n - 2, res);
    return res[n];
}

console.log(fibonacci(8));
console.log(recursiveFibonacci(8));
console.log(memoRecFib(20));