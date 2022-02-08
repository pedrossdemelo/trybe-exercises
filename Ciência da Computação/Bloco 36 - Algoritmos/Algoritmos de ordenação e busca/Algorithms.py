from Stopwatch import Stopwatch


# Given an array with the following elements: ["zebra", "macaco", "elefante",
# "arara", "javali"], after two iterations using bubble sort , what would this
# array look like?

def bubbleSort(arr):
    print(arr)
    iterations = 0
    n = len(arr)
    for i in range(n-1):
        for j in range(0, n-i-1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
            iterations += 1
            if (iterations == 2): print(f"After {iterations} iterations: {arr}")
    return arr


with Stopwatch("Bubble sort"):
    print(bubbleSort(["zebra", "monkey", "elephant", "macaw", "boar"]))
