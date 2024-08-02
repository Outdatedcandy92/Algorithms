# Algorithms


# Algorithms Included


## Bubble Sort

**Description**: 
Bubble Sort is a simple comparison-based sorting algorithm. It repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

**How it works**:
1. Compare the first two elements.
2. If the first element is greater than the second, swap them.
3. Move to the next pair of elements and repeat the process until the end of the list.
4. Repeat the entire process for the entire list until no swaps are needed.

**Time Complexity**:
- Best Case: O(n)
- Average Case: O(n^2)
- Worst Case: O(n^2)

## Selection Sort

**Description**: 
Selection Sort is an in-place comparison-based sorting algorithm. It divides the input list into two parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of the list.

**How it works**:
1. Find the minimum element in the unsorted part of the list.
2. Swap it with the first unsorted element.
3. Move the boundary of the sorted and unsorted sublists one element to the right.
4. Repeat until the entire list is sorted.

**Time Complexity**:
- Best Case: O(n^2)
- Average Case: O(n^2)
- Worst Case: O(n^2)

## Insertion Sort

**Description**: 
Insertion Sort is a simple comparison-based sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.

**How it works**:
1. Start with the second element (the first element is considered sorted).
2. Compare the current element with the sorted elements and insert it into the correct position.
3. Repeat for all elements until the list is sorted.

**Time Complexity**:
- Best Case: O(n)
- Average Case: O(n^2)
- Worst Case: O(n^2)

## Merge Sort

**Description**: 
Merge Sort is a divide-and-conquer algorithm that was invented by John von Neumann in 1945. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves.

**How it works**:
1. Divide the array into two halves.
2. Recursively sort each half.
3. Merge the two halves to produce the sorted array.

**Time Complexity**:
- Best Case: O(n log n)
- Average Case: O(n log n)
- Worst Case: O(n log n)

## Quick Sort

**Description**: 
Quick Sort is a highly efficient sorting algorithm and is based on partitioning of the array of data into smaller arrays. A large array is partitioned into two arrays, one of which holds values smaller than the specified value, say pivot, based on which the partition is made and another array holds values greater than the pivot value.

**How it works**:
1. Pick a pivot element.
2. Partition the array into two sub-arrays: elements less than the pivot and elements greater than the pivot.
3. Recursively apply the above steps to the sub-arrays.

**Time Complexity**:
- Best Case: O(n log n)
- Average Case: O(n log n)
- Worst Case: O(n^2)

## Heap Sort

**Description**: 
Heap Sort is a comparison-based sorting technique based on a binary heap data structure. It is similar to selection sort where we first find the maximum element and place the maximum element at the end. We repeat the same process for the remaining elements.

**How it works**:
1. Build a max heap from the input data.
2. At this point, the largest item is stored at the root of the heap. Replace it with the last item of the heap followed by reducing the size of the heap by 1. Finally, heapify the root of the tree.
3. Repeat step 2 while the size of the heap is greater than 1.

**Time Complexity**:
- Best Case: O(n log n)
- Average Case: O(n log n)
- Worst Case: O(n log n)

## Counting Sort

**Description**: 
Counting Sort is an integer sorting algorithm that operates by counting the number of objects that have distinct key values (kind of hashing). It is not a comparison-based sorting algorithm and its running time complexity is O(n) with space proportional to the range of the data.

**How it works**:
1. Find the range of the input data.
2. Create a count array to store the count of each unique object.
3. Modify the count array such that each element at each index stores the sum of previous counts.
4. Output each object from the input sequence followed by decreasing its count by 1.

**Time Complexity**:
- Best Case: O(n + k)
- Average Case: O(n + k)
- Worst Case: O(n + k)

## Radix Sort

**Description**: 
Radix Sort is a non-comparative sorting algorithm. It avoids comparison by creating and distributing elements into buckets according to their radix. For elements with more than one significant digit, this bucketing process is repeated for each digit, while preserving the ordering of the prior step, until all digits have been considered.

**How it works**:
1. Sort the elements based on the least significant digit.
2. Repeat the process for each digit, moving towards the most significant digit.

**Time Complexity**:
- Best Case: O(nk)
- Average Case: O(nk)
- Worst Case: O(nk)

Where \(n\) is the number of elements and \(k\) is the number of digits in the largest number.

### Bingo Sort Algorithm

**How it works**:
1. Find the largest element and move it to the end.
2. Repeat the process for the remaining elements.

**Time Complexity**:
- Best Case: O(n)
- Average Case: O(n^2)
- Worst Case: O(n^2)

### ShellSort

**How it works**:
1. Divide the list into smaller sublists using a gap sequence.
2. Sort each sublist using insertion sort.
3. Reduce the gap and repeat until the gap is 1.

**Time Complexity**:
- Best Case: O(n log n)
- Average Case: O(n log^2 n)
- Worst Case: O(n log^2 n)

### TimSort

**How it works**:
1. Divide the list into small runs and sort each run using insertion sort.
2. Merge the runs using merge sort.

**Time Complexity**:
- Best Case: O(n)
- Average Case: O(n log n)
- Worst Case: O(n log n)

### Comb Sort

**How it works**:
1. Initialize the gap to the length of the list.
2. Compare and swap elements that are gap distance apart.
3. Reduce the gap and repeat until the gap is 1.

**Time Complexity**:
- Best Case: O(n log n)
- Average Case: O(n^2 / 2^p)
- Worst Case: O(n^2)

### Pigeonhole Sort

**How it works**:
1. Find the range of the elements.
2. Create pigeonholes for each element in the range.
3. Place each element in its corresponding pigeonhole.
4. Collect the elements from the pigeonholes.

**Time Complexity**:
- Best Case: O(n + k)
- Average Case: O(n + k)
- Worst Case: O(n + k)

Where \(n\) is the number of elements and \(k\) is the range of the elements.

### Cycle Sort

**How it works**:
1. For each element, find its correct position.
2. Swap the element with the element at its correct position.
3. Repeat the process for all elements.

**Time Complexity**:
- Best Case: O(n^2)
- Average Case: O(n^2)
- Worst Case: O(n^2)

### Cocktail Sort

**How it works**:
1. Perform a bubble sort in both directions.
2. Repeat the process until the list is sorted.

**Time Complexity**:
- Best Case: O(n)
- Average Case: O(n^2)
- Worst Case: O(n^2)

### Strand Sort

**How it works**:
1. Create a sublist of sorted elements.
2. Merge the sublist with the remaining elements.
3. Repeat the process until all elements are sorted.

**Time Complexity**:
- Best Case: O(n)
- Average Case: O(n^2)
- Worst Case: O(n^2)

### Bitonic Sort

**How it works**:
1. Divide the list into bitonic sequences.
2. Sort each bitonic sequence.
3. Merge the sorted sequences.

**Time Complexity**:
- Best Case: O(n log^2 n)
- Average Case: O(n log^2 n)
- Worst Case: O(n log^2 n)

### Pancake Sorting

**How it works**:
1. Find the largest element and flip it to the front.
2. Flip the largest element to its correct position.
3. Repeat the process for the remaining elements.

**Time Complexity**:
- Best Case: O(n)
- Average Case: O(n^2)
- Worst Case: O(n^2)

### BogoSort

**How it works**:
1. Randomly shuffle the list.
2. Check if the list is sorted.
3. Repeat the process until the list is sorted.

**Time Complexity**:
- Best Case: O(n)
- Average Case: O((n+1)!)
- Worst Case: O(∞)

### Gnome Sort

**How it works**:
1. Compare the current element with the previous element.
2. If they are in the wrong order, swap them and move one step back.
3. Repeat the process until the list is sorted.

**Time Complexity**:
- Best Case: O(n)
- Average Case: O(n^2)
- Worst Case: O(n^2)

### Sleep Sort

**How it works**:
1. Create a thread for each element.
2. Sleep for a duration proportional to the element's value.
3. Print the element after waking up.

**Time Complexity**:
- Best Case: O(n)
- Average Case: O(n)
- Worst Case: O(n)

### Stooge Sort

**How it works**:
1. If the first element is larger than the last element, swap them.
2. Recursively sort the first two-thirds and the last two-thirds of the list.
3. Recursively sort the first two-thirds again.

**Time Complexity**:
- Best Case: O(n^2.709)
- Average Case: O(n^2.709)
- Worst Case: O(n^2.709)

### Tree Sort

**How it works**:
1. Insert all elements into a binary search tree.
2. Perform an in-order traversal to retrieve the sorted elements.

**Time Complexity**:
- Best Case: O(n log n)
- Average Case: O(n log n)
- Worst Case: O(n^2)

### Odd-Even Sort / Brick Sort

**How it works**:
1. Compare and swap adjacent elements in odd and even indexed pairs.
2. Repeat the process until the list is sorted.

**Time Complexity**:
- Best Case: O(n)
- Average Case: O(n^2)
- Worst Case: O(n^2)