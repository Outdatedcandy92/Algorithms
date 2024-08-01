import random
import csv

length = 1000

array = [random.randint(1, 100000) for _ in range(length)]


with open('array.csv', 'w', newline='') as csvfile:
    writer = csv.writer(csvfile)
    for value in array:
        writer.writerow([value])

print("Array saved to array.csv")