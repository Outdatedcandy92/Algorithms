import tkinter as tk
import random
import time


root = tk.Tk()
root.title("Sorting Algorithm Visualization")
canvas = tk.Canvas(root, width=800, height=400, bg='white')
canvas.pack()

arr = [random.randint(1, 100) for _ in range(50)]

def draw_array(arr, color_array):
    canvas.delete("all")
    c_height = 400
    c_width = 800
    x_width = c_width / (len(arr) + 1)
    offset = 30
    spacing = 10
    normalized_array = [i / max(arr) for i in arr]
    for i, height in enumerate(normalized_array):
        x0 = i * x_width + offset + spacing
        y0 = c_height - height * 350
        x1 = (i + 1) * x_width + offset
        y1 = c_height
        canvas.create_rectangle(x0, y0, x1, y1, fill=color_array[i])
    root.update_idletasks()

def bubble_sort_visual(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                draw_array(arr, ['red' if x == j or x == j+1 else 'blue' for x in range(len(arr))])
                yield
    draw_array(arr, ['green' for x in range(len(arr))])

def selection_sort_visual(arr):
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i+1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
        draw_array(arr, ['red' if x == i or x == min_idx else 'blue' for x in range(len(arr))])
        yield
    draw_array(arr, ['green' for x in range(len(arr))])

def insertion_sort_visual(arr):
    n = len(arr)
    for i in range(1, n):
        key = arr[i]
        j = i - 1
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
        draw_array(arr, ['red' if x == j + 1 or x == i else 'blue' for x in range(len(arr))])
        yield
    draw_array(arr, ['green' for x in range(len(arr))])

def merge_sort_visual(arr, l, r):
    if l < r:
        m = (l + r) // 2
        yield from merge_sort_visual(arr, l, m)
        yield from merge_sort_visual(arr, m + 1, r)
        yield from merge(arr, l, m, r)
        draw_array(arr, ['red' if x >= l and x <= r else 'blue' for x in range(len(arr))])
        yield

def merge(arr, l, m, r):
    n1 = m - l + 1
    n2 = r - m
    L = [0] * n1
    R = [0] * n2
    for i in range(0, n1):
        L[i] = arr[l + i]
    for j in range(0, n2):
        R[j] = arr[m + 1 + j]
    i = 0
    j = 0
    k = l
    while i < n1 and j < n2:
        if L[i] <= R[j]:
            arr[k] = L[i]
            i += 1
        else:
            arr[k] = R[j]
            j += 1
        k += 1
    while i < n1:
        arr[k] = L[i]
        i += 1
        k += 1
    while j < n2:
        arr[k] = R[j]
        j += 1
        k += 1

def quick_sort_visual(arr, low, high):
    if low < high:
        pi = yield from partition(arr, low, high)
        draw_array(arr, ['red' if x == pi else 'blue' for x in range(len(arr))])
        yield
        yield from quick_sort_visual(arr, low, pi-1)
        yield from quick_sort_visual(arr, pi+1, high)

def partition(arr, low, high):
    i = (low-1)
    pivot = arr[high]
    for j in range(low, high):
        if arr[j] < pivot:
            i = i+1
            arr[i], arr[j] = arr[j], arr[i]
            draw_array(arr, ['red' if x == i or x == j else 'blue' for x in range(len(arr))])
            yield
    arr[i+1], arr[high] = arr[high], arr[i+1]
    draw_array(arr, ['red' if x == i+1 or x == high else 'blue' for x in range(len(arr))])
    yield
    return (i+1)

def heap_sort_visual(arr):
    n = len(arr)
    for i in range(n // 2 - 1, -1, -1):
        yield from heapify(arr, n, i)
    for i in range(n-1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]
        yield from heapify(arr, i, 0)
        draw_array(arr, ['red' if x == i else 'blue' for x in range(len(arr))])
        yield
    draw_array(arr, ['green' for x in range(len(arr))])

def heapify(arr, n, i):
    largest = i
    l = 2 * i + 1
    r = 2 * i + 2
    if l < n and arr[i] < arr[l]:
        largest = l
    if r < n and arr[largest] < arr[r]:
        largest = r
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        yield from heapify(arr, n, largest)

def counting_sort_visual(arr):
    max_val = max(arr)
    m = max_val + 1
    count = [0] * m
    for a in arr:
        count[a] += 1
    i = 0
    for a in range(m):
        for c in range(count[a]):
            arr[i] = a
            i += 1
            draw_array(arr, ['red' if x == i else 'blue' for x in range(len(arr))])
            yield
    draw_array(arr, ['green' for x in range(len(arr))])

def radix_sort_visual(arr):
    RADIX = 10
    maxLength = False
    tmp, placement = -1, 1
    while not maxLength:
        maxLength = True
        buckets = [list() for _ in range(RADIX)]
        for i in arr:
            tmp = i // placement
            buckets[tmp % RADIX].append(i)
            if maxLength and tmp > 0:
                maxLength = False
        a = 0
        for b in range(RADIX):
            buck = buckets[b]
            for i in buck:
                arr[a] = i
                a += 1
                draw_array(arr, ['red' if x == a else 'blue' for x in range(len(arr))])
                yield
        placement *= RADIX
    draw_array(arr, ['green' for x in range(len(arr))])

def start_sorting():
    global arr
    sorting_algorithm = algorithm_var.get()
    if sorting_algorithm == "Bubble Sort":
        generator = bubble_sort_visual(arr)
    elif sorting_algorithm == "Selection Sort":
        generator = selection_sort_visual(arr)
    elif sorting_algorithm == "Insertion Sort":
        generator = insertion_sort_visual(arr)
    elif sorting_algorithm == "Merge Sort":
        generator = merge_sort_visual(arr, 0, len(arr)-1)
    elif sorting_algorithm == "Quick Sort":
        generator = quick_sort_visual(arr, 0, len(arr)-1)
    elif sorting_algorithm == "Heap Sort":
        generator = heap_sort_visual(arr)
    elif sorting_algorithm == "Counting Sort":
        generator = counting_sort_visual(arr)
    elif sorting_algorithm == "Radix Sort":
        generator = radix_sort_visual(arr)
    else:
        return

    def run():
        try:
            next(generator)
            root.after(100, run)
        except StopIteration:
            pass

    run()

def reset_array():
    global arr
    arr = [random.randint(1, 100) for _ in range(50)]
    draw_array(arr, ['blue' for x in range(len(arr))])

algorithm_var = tk.StringVar()
algorithm_var.set("Bubble Sort")

algorithm_menu = tk.OptionMenu(root, algorithm_var, "Bubble Sort", "Selection Sort", "Insertion Sort", "Merge Sort", "Quick Sort", "Heap Sort", "Counting Sort", "Radix Sort")
algorithm_menu.pack()

start_button = tk.Button(root, text="Start Sorting", command=start_sorting)
start_button.pack()

reset_button = tk.Button(root, text="Reset Array", command=reset_array)
reset_button.pack()


draw_array(arr, ['blue' for x in range(len(arr))])

root.mainloop()