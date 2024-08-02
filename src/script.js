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
        case 'Bubble Sort':
            await bubbleSort();
            break;
        case 'Selection Sort':
            await selectionSort();
            break;
        case 'Insertion Sort':
            await insertionSort();
            break;
        case 'Merge Sort':
            await mergeSort(0, array.length - 1);
            break;
        case 'Quick Sort':
            await quickSort(0, array.length - 1);
            break;
        case 'Heap Sort':
            await heapSort();
            break;
        case 'Counting Sort':
            await countingSort();
            break;
        case 'Radix Sort':
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


function logSelectedAlgorithm() {
    const algorithmSelect = document.getElementById('algorithm');
    const selectedAlgorithm = algorithmSelect.value;
    console.log('Selected Algorithm:', selectedAlgorithm);

    const AlgoHeading = document.getElementById('SortingAlgo');
    const AlgoDescription = document.getElementById('AlgoDescription');
    const AlgoComplexity = document.getElementById('AlgoComplexity');

    AlgoHeading.innerHTML = `${selectedAlgorithm}`;
    //TODO: get the data from algo.json
}


document.getElementById('algorithm').addEventListener('change', logSelectedAlgorithm);


document.addEventListener('DOMContentLoaded', logSelectedAlgorithm);

generateArray(arraySize);