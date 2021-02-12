const arr = [3, 4, 2, 7, 1, 56, 12, 4, 89];

function quickSort(arr, start, end) {
    if (!Array.isArray(arr) || arr.length <= 1 || start >= end) return;
    const index = partition(arr, start, end);
    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end);
}

function partition(arr, start, end) {
    let pivot = arr[start];
    while (start < end) {
        while (arr[end] >= pivot && start < end) end--;
        arr[start] = arr[end];
        while (arr[start] < pivot && start < end) start++;
        arr[end] = arr[start];
    }
    arr[start] = pivot;
    return start;
}

function insertSort(arr) {
    for (let i = 1, len = arr.length; i < len; i++) {
        let temp = arr[i];
        let j = i;
        while (j - 1 >= 0 && arr[j - 1] > temp) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = temp;
    }
}

function selectSort(arr) {
    let minIndex;
    for (let i = 0, len = arr.length; i < len; i++) {
        minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
        }
    }
}

function bubbleSort(arr) {
    let flag;
    for (let i = 0, len = arr.length; i < len; i++) {
        flag = true;
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                flag = false;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
        if (flag) return;
    }
}

function mergeSort(array) {
    let length = array.length;
    if (!Array.isArray(array) || length === 0) return;
    if (length === 1) {
        return array;
    }
    let mid = parseInt(length >> 1),
        left = array.slice(0, mid),
        right = array.slice(mid, length);
    array = merge(mergeSort(left), mergeSort(right));
}


function merge(leftArray, rightArray) {
    let result = [],
        leftLength = leftArray.length,
        rightLength = rightArray.length,
        il = 0,
        ir = 0;
    // 左右两个数组的元素依次比较，将较小的元素加入结果数组中，直到其中一个数组的元素全部加入完则停止
    while (il < leftLength && ir < rightLength) {
        if (leftArray[il] < rightArray[ir]) {
            result.push(leftArray[il++]);
        } else {
            result.push(rightArray[ir++]);
        }
    }
    // 如果是左边数组还有剩余，则把剩余的元素全部加入到结果数组中。
    while (il < leftLength) {
        result.push(leftArray[il++]);
    }
    // 如果是右边数组还有剩余，则把剩余的元素全部加入到结果数组中。
    while (ir < rightLength) {
        result.push(rightArray[ir++]);
    }
    return result;
}


class HeadSort {

    headSort(arr) {
        let len = arr.length;
        this.buildMaxHeap(arr);
        for (let i = len - 1; i > 0; i--) {
            [arr[0], arr[i]] = [arr[i], arr[0]];
            this.headAdjust(arr, 0, i);
        }
    }

    buildMaxHeap(arr) {
        let len = arr.length;
        for (let i = (len >> 1) - 1; i >= 0; i--) {
            this.headAdjust(arr, i, len);
        }
    }

    headAdjust(arr, k, len) {
        let max, left, right;
        while (true) {
            max = k, left = 2 * k + 1, right = 2 * k + 2
            if (left < len && arr[max] < arr[left]) {
                max = left;
            }
            if (right < len && arr[max] < arr[right]) {
                max = right;
            }
            if (max !== k) {
                [arr[max], arr[k]] = [arr[k], arr[max]];
                k = max;
            } else {
                break;
            }
        }
    }
}


function buildMinHead(arr){
    let len = arr.length;
    for (let i = (len >> 1) - 1; i >= 0; i--) {
        headAdjust(arr, i, len);
    }
}

function headAdjust(arr, k, len) {
    let min, left, right;
    while (true) {
        min = k, left = 2 * k + 1, right = 2 * k + 2
        if (left < len && arr[min] > arr[left]) {
            min = left;
        }
        if (right < len && arr[min] > arr[right]) {
            min = right;
        }
        if (min !== k) {
            [arr[min], arr[k]] = [arr[k], arr[min]];
            k = min;
        } else {
            break;
        }
    }
}

console.log(arr);
buildMinHead(arr);
for (let i = arr.length - 1; i > 0; i--) {
    console.log(arr[0]);
    [arr[0], arr[i]] = [arr[i], arr[0]];
    headAdjust(arr, 0, i);
}
console.log(arr)



