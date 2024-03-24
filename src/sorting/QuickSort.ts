function swap(arr: Array<number>, i: number, j: number) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function partition(arr: Array<number>, low: number, high: number): number {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return i + 1;
}

export function quickSort(arr: Array<number>): Array<number> {
    let low = 0;
    let high = arr.length - 1;
    function _quickSort(arr: Array<number>, low: number, high: number): void {
        if (low < high) {
            let pi = partition(arr, low, high);
            _quickSort(arr, low, pi - 1);
            _quickSort(arr, pi + 1, high);
        }
    }
    _quickSort(arr, low, high);
    return arr;
}
