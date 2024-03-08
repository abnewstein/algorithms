function factorial(n: number) {
    let result = n;
    for (let i = n - 1; i > 0; i--) {
        result *= i;
    }
    return result;
}

function recFactorial(n: number, memo = {}) {
    if (n === 0) {
        return 1
    }
    return n * recFactorial(n - 1);
}

console.log(factorial(6))
console.log(recFactorial(6))