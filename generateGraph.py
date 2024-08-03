import json
import matplotlib.pyplot as plt
import numpy as np
import math

def list_time_complexities(file_path):

    with open(file_path, 'r') as file:
        data = json.load(file)

    unique_time_complexities = set()
    

    for algorithm in data.get('algorithms', []):
        time_complexities = algorithm.get('time_complexity', {})
        best_case = time_complexities.get('best_case', 'N/A')
        average_case = time_complexities.get('average_case', 'N/A')
        worst_case = time_complexities.get('worst_case', 'N/A')
        

        unique_time_complexities.add(best_case)
        unique_time_complexities.add(average_case)
        unique_time_complexities.add(worst_case)
    

    print(f"There are {len(unique_time_complexities)} types of time complexities:")
    for complexity in unique_time_complexities:
        print(complexity)


#list_time_complexities('src/algo.json')

t = ['O(n^2.709)', 'O(n^2 / 2^p)', 'O((n+1)!)', 'O(n)', 'O(n^2)', 'O(n + k)', 'O(n log^2 n)', 'O(n log n)', 'O(∞)', 'O(nk)']


def plot_graph(func, x_range=(0, 10000), num_points=1000, alpha=1, label='Function'):
    x = np.linspace(x_range[0], x_range[1], num_points)
    y = func(x)
    plt.plot(x, y, alpha=alpha, label=label)
    plt.xlabel('Data input')
    plt.ylabel('Number Of Operations')
    plt.title('Graph of the Function')



    plt.legend()


    plt.savefig('img/O((n+1)!).png', transparent=True)
    plt.show()



def sample_function(x):
    def factorial(n):
        if n == 0 or n == 1:
            return 1
        else:
            result = 1
            for i in range(2, n + 1):
                result *= i
            return result

    return np.array([factorial(int(val + 1)) for val in x])


plot_graph(sample_function, label='O((n+1)!)')
