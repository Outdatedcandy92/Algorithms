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
