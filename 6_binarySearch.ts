function binarySearch(arr: Array<number>, target: number) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    while (leftIndex <= rightIndex) {
        let mid = Math.floor((leftIndex + rightIndex) / 2);
        if (target === arr[mid]) {
            return mid;
        }
        if (target < arr[mid]) {
            rightIndex = mid - 1;
        } else {
            leftIndex = mid + 1;
        }
    }
}

function recBinarySearch(arr: Array<number>, target: number) {
    return search(arr, target, 0, arr.length - 1);
}

function search(arr: Array<number>, target: number, left: number, right: number) {
    if (left > right) {
        return -1;
    }
    let mid = Math.floor((left + right) / 2);
    if (target === arr[mid]) {
        return mid;
    }
    if (target < arr[mid]) {
        return search(arr, target, left, mid - 1);
    } else {
        return search(arr, target, mid + 1, right);
    }
}

console.log(binarySearch([1, 2, 3, 4, 5], 3))
console.log(binarySearch([1, 2, 3, 4, 5], 4))
console.log(binarySearch([1, 2, 3, 4, 5], 5))
console.log(recBinarySearch([1, 2, 3, 4, 5], 3))
console.log(recBinarySearch([1, 2, 3, 4, 5], 4))
console.log(recBinarySearch([1, 2, 3, 4, 5], 5))