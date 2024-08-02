let array = [];
const arraySize = 50;

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
        bar.style.width = `${800 / arraySize - 2}px`;
        if (highlightedIndices.includes(index)) {
            bar.style.backgroundColor = '#006d32'; // darker green highlight col
        } else {
            bar.style.backgroundColor = '#39d353'; //green deafult col
        }
        container.appendChild(bar);
    });
}

async function startSorting() {
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
    }
    drawArray();
}

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



function sleep() {
    const ms = 10;
    return new Promise(resolve => setTimeout(resolve, ms));
}

resetArray();