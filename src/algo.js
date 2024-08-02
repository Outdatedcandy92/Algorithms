async function bubbleSort() {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            drawArray([j, j + 1]);
            await sleep();
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                drawArray([j, j + 1]); 
                await sleep();
            }
        }
    }
}

async function selectionSort() {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            drawArray([minIndex, j]);
            await sleep();
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
            drawArray([i, minIndex]); 
            await sleep();
        }
    }
}

async function insertionSort() {
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            drawArray([j, j + 1]);
            await sleep();
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = key;
        drawArray([j + 1]); 
        await sleep();
    }
}


async function radixSort() {
    const max = Math.max(...array);
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        await countingSortForRadix(exp);
    }
}

async function countingSortForRadix(exp) {
    const output = new Array(array.length);
    const count = new Array(10).fill(0);

    for (let i = 0; i < array.length; i++) {
        const index = Math.floor(array[i] / exp) % 10;
        count[index]++;
        drawArray([i]); 
        await sleep();
    }

    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    for (let i = array.length - 1; i >= 0; i--) {
        const index = Math.floor(array[i] / exp) % 10;
        output[count[index] - 1] = array[i];
        count[index]--;
        drawArray([i]);
        await sleep();
    }

    for (let i = 0; i < array.length; i++) {
        array[i] = output[i];
        drawArray([i]); 
        await sleep();
    }
}


async function countingSort() {
    const max = Math.max(...array);
    const count = new Array(max + 1).fill(0);
    const output = new Array(array.length);

    for (let i = 0; i < array.length; i++) {
        count[array[i]]++;
        drawArray([i]); 
        await sleep();
    }

    for (let i = 1; i <= max; i++) {
        count[i] += count[i - 1];
    }

    for (let i = array.length - 1; i >= 0; i--) {
        output[count[array[i]] - 1] = array[i];
        count[array[i]]--;
        drawArray([i]);
        await sleep();
    }

    for (let i = 0; i < array.length; i++) {
        array[i] = output[i];
        drawArray([i]); 
        await sleep();
    }
}


async function heapSort() {
    const n = array.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        await heapify(n, i);
    }
    for (let i = n - 1; i > 0; i--) {
        [array[0], array[i]] = [array[i], array[0]];
        drawArray([0, i]); 
        await sleep();
        await heapify(i, 0);
    }
}

async function heapify(n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    if (left < n && array[left] > array[largest]) {
        largest = left;
    }
    if (right < n && array[right] > array[largest]) {
        largest = right;
    }
    if (largest !== i) {
        [array[i], array[largest]] = [array[largest], array[i]];
        drawArray([i, largest]); 
        await sleep();
        await heapify(n, largest);
    }
}


async function quickSort(left, right) {
    if (left >= right) return;
    const pivotIndex = await partition(left, right);
    await quickSort(left, pivotIndex - 1);
    await quickSort(pivotIndex + 1, right);
}

async function partition(left, right) {
    const pivot = array[right];
    let i = left - 1;
    for (let j = left; j < right; j++) {
        drawArray([j, right]); 
        await sleep();
        if (array[j] <= pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
            drawArray([i, j]); 
            await sleep();
        }
    }
    [array[i + 1], array[right]] = [array[right], array[i + 1]];
    drawArray([i + 1, right]); 
    await sleep();
    return i + 1;
}

async function mergeSort(left, right) {
    if (left >= right) return;
    const mid = Math.floor((left + right) / 2);
    await mergeSort(left, mid);
    await mergeSort(mid + 1, right);
    await merge(left, mid, right);
}

async function merge(left, mid, right) {
    const leftArray = array.slice(left, mid + 1);
    const rightArray = array.slice(mid + 1, right + 1);
    let i = 0, j = 0, k = left;
    while (i < leftArray.length && j < rightArray.length) {
        drawArray([k]); 
        await sleep();
        if (leftArray[i] <= rightArray[j]) {
            array[k++] = leftArray[i++];
        } else {
            array[k++] = rightArray[j++];
        }
    }
    while (i < leftArray.length) {
        drawArray([k]); 
        await sleep();
        array[k++] = leftArray[i++];
    }
    while (j < rightArray.length) {
        drawArray([k]); 
        await sleep();
        array[k++] = rightArray[j++];
    }
}



async function bingoSort() {
    let n = array.length;
    let max = Math.max(...array);
    let nextValue = max;
    let bingo = max;

    while (n > 0) {
        bingo = nextValue;
        nextValue = -Infinity;
        for (let i = 0; i < n; i++) {
            if (array[i] === bingo) {
                array[i] = array[--n];
                array[n] = bingo;
                drawArray(array);
                await sleep();
            } else if (array[i] > nextValue) {
                nextValue = array[i];
            }
        }
    }
}

async function timSort() {
    let n = array.length;
    for (let i = 0; i < n; i += RUN)
        await insertionSort(array, i, Math.min((i + 31), (n - 1)));

    for (let size = RUN; size < n; size = 2 * size) {
        for (let left = 0; left < n; left += 2 * size) {
            let mid = left + size - 1;
            let right = Math.min((left + 2 * size - 1), (n - 1));
            if (mid < right)
                await merge(left, mid, right);
        }
    }
}

async function shellSort() {
    let n = array.length;
    let gap = Math.floor(n / 2);

    while (gap > 0) {
        for (let i = gap; i < n; i++) {
            let temp = array[i];
            let j;
            for (j = i; j >= gap && array[j - gap] > temp; j -= gap) {
                array[j] = array[j - gap];
                drawArray(array);
                await sleep();
            }
            array[j] = temp;
            drawArray(array);
            await sleep();
        }
        gap = Math.floor(gap / 2);
    }
}

const RUN = 32;

async function insertionSort(array, left, right) {
    for (let i = left + 1; i <= right; i++) {
        let temp = array[i];
        let j = i - 1;
        while (j >= left && array[j] > temp) {
            array[j + 1] = array[j];
            j--;
            drawArray(array);
            await sleep();
        }
        array[j + 1] = temp;
        drawArray(array);
        await sleep();
    }
}

async function combSort() {
    let gap = array.length;
    let shrink = 1.3;
    let sorted = false;

    while (!sorted) {
        gap = Math.floor(gap / shrink);
        if (gap <= 1) {
            gap = 1;
            sorted = true;
        }

        for (let i = 0; i + gap < array.length; i++) {
            if (array[i] > array[i + gap]) {
                [array[i], array[i + gap]] = [array[i + gap], array[i]];
                sorted = false;
                drawArray(array);
                await sleep();
            }
        }
    }
}

async function pigeonholeSort() {
    let min = Math.min(...array);
    let max = Math.max(...array);
    let range = max - min + 1;
    let holes = Array.from({ length: range }, () => []);

    array.forEach((num) => {
        holes[num - min].push(num);
    });

    let index = 0;
    for (let hole of holes) {
        while (hole.length > 0) {
            array[index++] = hole.shift();
            drawArray(array);
            await sleep();
        }
    }
}

async function cycleSort() {
    let writes = 0;

    for (let cycleStart = 0; cycleStart < array.length - 1; cycleStart++) {
        let item = array[cycleStart];
        let pos = cycleStart;

        for (let i = cycleStart + 1; i < array.length; i++) {
            if (array[i] < item) {
                pos++;
            }
        }

        if (pos === cycleStart) {
            continue;
        }

        while (item === array[pos]) {
            pos++;
        }

        if (pos !== cycleStart) {
            [array[pos], item] = [item, array[pos]];
            writes++;
            drawArray(array);
            await sleep();
        }

        while (pos !== cycleStart) {
            pos = cycleStart;
            for (let i = cycleStart + 1; i < array.length; i++) {
                if (array[i] < item) {
                    pos++;
                }
            }

            while (item === array[pos]) {
                pos++;
            }

            if (item !== array[pos]) {
                [array[pos], item] = [item, array[pos]];
                writes++;
                drawArray(array);
                await sleep();
            }
        }
    }
}

async function cocktailSort() {
    let swapped = true;
    let start = 0;
    let end = array.length;

    while (swapped) {
        swapped = false;

        for (let i = start; i < end - 1; ++i) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                swapped = true;
                drawArray(array);
                await sleep();
            }
        }

        if (!swapped) break;

        swapped = false;
        end--;

        for (let i = end - 1; i >= start; i--) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                swapped = true;
                drawArray(array);
                await sleep();
            }
        }

        start++;
    }
}

async function strandSort() {
    function merge(arr1, arr2) {
        let result = [];
        while (arr1.length && arr2.length) {
            if (arr1[0] < arr2[0]) {
                result.push(arr1.shift());
            } else {
                result.push(arr2.shift());
            }
        }
        return result.concat(arr1).concat(arr2);
    }

    async function strand(arr) {
        if (arr.length === 0) return [];
        let sublist = [arr.shift()];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > sublist[sublist.length - 1]) {
                sublist.push(arr.splice(i, 1)[0]);
                i--;
            }
        }
        drawArray(array);
        await sleep();
        return merge(sublist, await strand(arr));
    }

    array = await strand(array);
    drawArray(array);
    await sleep();
}

async function bitonicSort() {
    async function bitonicMerge(arr, low, cnt, dir) {
        if (cnt > 1) {
            let k = Math.floor(cnt / 2);
            for (let i = low; i < low + k; i++) {
                if (dir === (arr[i] > arr[i + k])) {
                    [arr[i], arr[i + k]] = [arr[i + k], arr[i]];
                    drawArray(array);
                    await sleep();
                }
            }
            await bitonicMerge(arr, low, k, dir);
            await bitonicMerge(arr, low + k, k, dir);
        }
    }

    async function bitonicSortHelper(arr, low, cnt, dir) {
        if (cnt > 1) {
            let k = Math.floor(cnt / 2);
            await bitonicSortHelper(arr, low, k, 1);
            await bitonicSortHelper(arr, low + k, k, 0);
            await bitonicMerge(arr, low, cnt, dir);
        }
    }

    await bitonicSortHelper(array, 0, array.length, 1);
    drawArray(array);
    await sleep();
}

async function pancakeSort() {
    function flip(arr, i) {
        let start = 0;
        while (start < i) {
            [arr[start], arr[i]] = [arr[i], arr[start]];
            start++;
            i--;
        }
    }

    for (let curr_size = array.length; curr_size > 1; --curr_size) {
        let mi = 0;
        for (let i = 0; i < curr_size; i++) {
            if (array[i] > array[mi]) {
                mi = i;
            }
        }
        if (mi !== curr_size - 1) {
            flip(array, mi);
            drawArray(array);
            await sleep();
            flip(array, curr_size - 1);
            drawArray(array);
            await sleep();
        }
    }
}

async function bogoSort() {
    function isSorted(arr) {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i - 1]) {
                return false;
            }
        }
        return true;
    }

    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    while (!isSorted(array)) {
        shuffle(array);
        drawArray(array);
        await sleep();
    }
}

async function gnomeSort() {
    let index = 0;
    while (index < array.length) {
        if (index === 0 || array[index] >= array[index - 1]) {
            index++;
        } else {
            [array[index], array[index - 1]] = [array[index - 1], array[index]];
            index--;
            drawArray(array);
            await sleep();
        }
    }
    drawArray(array);
    await sleep();
}

async function sleepSort() {
    let sortedArray = [];
    let promises = array.map(num => new Promise(resolve => setTimeout(() => {
        sortedArray.push(num);
        drawArray(sortedArray);
        resolve();
    }, num)));

    await Promise.all(promises);
    array = sortedArray;
    drawArray(array);
    await sleep();
}

async function stoogeSort(l = 0, h = array.length - 1) {
    if (array[h] < array[l]) {
        [array[l], array[h]] = [array[h], array[l]];
        drawArray(array);
        await sleep();
    }
    if (h - l + 1 > 2) {
        let t = Math.floor((h - l + 1) / 3);
        await stoogeSort(l, h - t);
        await stoogeSort(l + t, h);
        await stoogeSort(l, h - t);
    }
}

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

async function treeSort() {
    function insert(root, value) {
        if (!root) return new TreeNode(value);
        if (value < root.value) root.left = insert(root.left, value);
        else root.right = insert(root.right, value);
        return root;
    }

    function inOrderTraversal(root, result) {
        if (root) {
            inOrderTraversal(root.left, result);
            result.push(root.value);
            inOrderTraversal(root.right, result);
        }
    }

    let root = null;
    for (let value of array) {
        root = insert(root, value);
        drawArray(array);
        await sleep();
    }

    let sortedArray = [];
    inOrderTraversal(root, sortedArray);
    array = sortedArray;
    drawArray(array);
    await sleep();
}

async function oddEvenSort() {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 1; i < array.length - 1; i += 2) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                sorted = false;
                drawArray(array);
                await sleep();
            }
        }
        for (let i = 0; i < array.length - 1; i += 2) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                sorted = false;
                drawArray(array);
                await sleep();
            }
        }
    }
    drawArray(array);
    await sleep();
}

async function threeWayMergeSort() {
    async function mergeSort(arr) {
        if (arr.length < 2) return arr;
        let third = Math.floor(arr.length / 3);
        let left = arr.slice(0, third);
        let middle = arr.slice(third, 2 * third);
        let right = arr.slice(2 * third);

        left = await mergeSort(left);
        middle = await mergeSort(middle);
        right = await mergeSort(right);

        return merge(merge(left, middle), right);
    }

    function merge(left, right) {
        let result = [];
        while (left.length && right.length) {
            if (left[0] < right[0]) {
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        }
        return result.concat(left).concat(right);
    }

    array = await mergeSort(array);
    drawArray(array);
    await sleep();
}