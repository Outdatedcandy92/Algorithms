let array = [];
let arraySize = 50; 
let speed = 500; 
let isSorting = false;

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('speedValue').textContent = speed;
    document.getElementById('speedSlider').value = speed;
    document.getElementById('arrayLength').value = arraySize;
    generateArray(arraySize);
});

document.getElementById('speedSlider').addEventListener('input', function() {
    speed = this.value;
    document.getElementById('speedValue').textContent = speed;
});

document.getElementById('arrayLength').addEventListener('input', function() {
    arraySize = this.value;
    generateArray(arraySize); 
});

function resetArray() {
    array = Array.from({ length: arraySize }, () => Math.floor(Math.random() * 100) + 1);
    drawArray();
}

function drawArray(highlightedIndices = []) {
    const container = document.getElementById('array-container');
    container.innerHTML = '';
    array.forEach((value, index) => {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${value * 4}px`;
        if (highlightedIndices.includes(index)) {
            bar.style.backgroundColor = 'red'; //TODO: pick a better color or a variable
        }
        container.appendChild(bar);
    });
}

async function sleep() {
    const wait = speed;
    return new Promise(resolve => setTimeout(resolve, wait));
}

async function startSorting() {
    isSorting = true;
    const algorithm = document.getElementById('algorithm').value;
    switch (algorithm) {
        case 'bubbleSort':
            await bubbleSort();
            break;
        case 'selectionSort':
            await selectionSort();
            break;
        case 'insertionSort':
            await insertionSort();
            break;
        case 'mergeSort':
            await mergeSort(0, array.length - 1);
            break;
        case 'quickSort':
            await quickSort(0, array.length - 1);
            break;
        case 'heapSort':
            await heapSort();
            break;
        case 'countingSort':
            await countingSort();
            break;
        case 'radixSort':
            await radixSort();
            break;
        default:
            console.error('Unknown sorting algorithm:', algorithm);
    }
}

function generateArray(length) {
    array = Array.from({ length }, () => Math.floor(Math.random() * 100) + 1);
    drawArray();
}


generateArray(arraySize);