let array = [];
let arraySize = 105;
let speed = 500;
let isSorting = false;




document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('speedValue').textContent = speed;
    document.getElementById('speedSlider').value = speed;
    document.getElementById('arrayLength').value = arraySize;
    generateArray(arraySize);
});

document.getElementById('speedSlider').addEventListener('input', function () {
    speed = this.value;
    document.getElementById('speedValue').textContent = speed;
});

document.getElementById('arrayLength').addEventListener('input', function () {
    arraySize = this.value;
    document.getElementById('arrayLengthValue').textContent = arraySize;
    generateArray(arraySize);
});

function resetArray() {
    array = Array.from({ length: arraySize }, () => Math.floor(Math.random() * 100) + 1);
    drawArray();
}



function drawArray(highlightedIndices = []) {
    const container = document.getElementById('array-container');
    const widthEach = 1000 / arraySize;
    container.innerHTML = '';
    array.forEach((value, index) => {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${value * 4}px`;
        bar.style.width = `${widthEach - 2}px`;
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
        case 'Bingo Sort':
            await bingoSort();
            break;
        case 'Shell Sort':
            await shellSort();
            break;
        case 'Tim Sort':
            await timSort();
            break;
        case 'Comb Sort':
            await combSort();
            break;
        case 'Pigeonhole Sort':
            await pigeonholeSort();
            break;
        case 'Cycle Sort':
            await cycleSort();
            break;
        case 'Cocktail Sort':
            await cocktailSort();
            break;
        case 'Strand Sort':
            await strandSort();
            break;
        case 'Bitonic Sort':
            await bitonicSort();
            break;
        case 'Pancake Sort':
            await pancakeSort();
            break;
        case 'BogoSort':
            await bogoSort();
            break;
        case 'Gnome Sort':
            await gnomeSort();
            break;
        case 'Sleep Sort':
            await sleepSort();
            break;
        case 'Stooge Sort':
            await stoogeSort();
            break;
        case 'Tree Sort':
            await treeSort();
            break;
        case 'Odd-Even Sort':
            await oddEvenSort();
            break;
        //case '3way Merge Sort':
        //await threeWayMergeSort();
        //break;
        default:
            console.error('Unknown sorting algorithm:', algorithm);
    }
}

function generateArray(length) {
    array = Array.from({ length }, () => Math.floor(Math.random() * 100) + 1);
    drawArray();
}


let algorithmsData = {};

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('src/algo.json');
        algorithmsData = await response.json();
        logSelectedAlgorithm();
    } catch (error) {
        console.error('Error fetching algorithms data:', error);
    }
});

function logSelectedAlgorithm() {
    const algorithmSelect = document.getElementById('algorithm');
    const selectedAlgorithm = algorithmSelect.value;
    console.log('Selected Algorithm:', selectedAlgorithm);

    const AlgoHeading = document.getElementById('HeadingInfo');
    const AlgoDescription = document.getElementById('AlgoDescription');
    const AlgoComplexity = document.getElementById('AlgoComplexity');
    const AlgoHow = document.getElementById('AlgoHow');

    const algorithmData = algorithmsData.algorithms.find(algo => algo.name === selectedAlgorithm);

    if (algorithmData) {
        AlgoHeading.innerHTML = `${selectedAlgorithm}`;
        AlgoDescription.innerHTML = algorithmData.description;

        const howItWorksList = document.createElement('ul');
        algorithmData.how_it_works.forEach(step => {
            const listItem = document.createElement('li');
            listItem.textContent = step;
            howItWorksList.appendChild(listItem);
        });
        AlgoHow.innerHTML = '';
        AlgoHow.appendChild(howItWorksList);



        const timeComplexity = algorithmData.time_complexity;
        console.log('Average Case Time Complexity:', timeComplexity.average_case);


        showGraph(timeComplexity.average_case);

        AlgoComplexity.innerHTML = `
            <p><strong>Best Case:</strong> ${algorithmData.time_complexity.best_case}</p>
            <p><strong>Average Case:</strong> ${algorithmData.time_complexity.average_case}</p>
            <p><strong>Worst Case:</strong> ${algorithmData.time_complexity.worst_case}</p>
        `;
    } else {
        AlgoDescription.innerHTML = 'Description not available.';
        AlgoComplexity.innerHTML = 'Complexity not available.';
        AlgoHow.innerHTML = 'How it works not available.';
    }
}
document.getElementById('algorithm').addEventListener('change', logSelectedAlgorithm);

generateArray(arraySize);


function showGraph(timeComplexity) {
    const GraphArea = document.getElementById('GraphArea');
    const existingImage = GraphArea.querySelector('img');
    if (existingImage) {
        existingImage.remove();
    }
    const image = document.createElement('img');
    switch (timeComplexity) {
        case 'O(n^2)':
            image.src = './img/O(n^2).png';
            GraphArea.appendChild(image);
            console.log('case O(n^2)');
            break;
        case 'O(n^2.709)':
            image.src = './img/O(n^2.709).png';
            GraphArea.appendChild(image);
            console.log('case O(n^2.709)');
            break;
        case 'O(n^2 / 2^p)':
            image.src = './img/O(n^2 / 2^p).png';
            GraphArea.appendChild(image);
            console.log('case O(n^2 / 2^p)');
            break;
        case 'O((n+1)!)':
            image.src = './img/O((n+1)!).png';
            GraphArea.appendChild(image);
            console.log('case O((n+1)!)');
            break;
        case 'O(n)':
            image.src = './img/O(n).png';
            GraphArea.appendChild(image);
            console.log('case O(n)');
            break;
        case 'O(n + k)':
            image.src = './img/O(n + k).png';
            GraphArea.appendChild(image);
            console.log('case O(n + k)');
            break;
        case 'O(n log^2 n)':
            image.src = './img/O(n log^2 n).png';
            GraphArea.appendChild(image);
            console.log('case O(n log^2 n)');
            break;
        case 'O(n log n)':
            image.src = './img/O(n log n).png';
            GraphArea.appendChild(image);
            console.log('case O(n log n)');
            break;
        case 'O(nk)':
            image.src = './img/O(nk).png';
            GraphArea.appendChild(image);
            console.log('case O(nk)');
            break;
        default:
            console.log('Unknown case');
    }
}





