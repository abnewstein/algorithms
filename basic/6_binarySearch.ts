export function binarySearch(arr: Array<number>, target: number) {
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
    return -1;
}

export function recursiveBinarySearch(arr: Array<number>, target: number) {
    return binSearch(arr, target, 0, arr.length - 1);
}

export function binSearch(arr: Array<number>, target: number, left: number, right: number) {
    if (left > right) {
        return -1;
    }
    let mid = Math.floor((left + right) / 2);
    if (target === arr[mid]) {
        return mid;
    }
    if (target < arr[mid]) {
        return binSearch(arr, target, left, mid - 1);
    } else {
        return binSearch(arr, target, mid + 1, right);
    }
}






