function linearSearch(arr: Array<number>, target: number) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
}

console.log(linearSearch([1,2,3,4,5], 3))
console.log(linearSearch([1,2,3,4,5], 4))
console.log(linearSearch([1,2,3,4,5], 5))