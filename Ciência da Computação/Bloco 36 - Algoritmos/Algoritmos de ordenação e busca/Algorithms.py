from random import shuffle
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
            if (iterations == 2):
                print(f"After {iterations} iterations: {arr}")
    return arr


with Stopwatch("Bubble sort"):
    print(bubbleSort(["zebra", "monkey", "elephant", "macaw", "boar"]))


def merge(left, right):
    left_index, right_index = 0, 0
    result = []
    while left_index < len(left) and right_index < len(right):
        if left[left_index] < right[right_index]:
            result.append(left[left_index])
            left_index += 1
        else:
            result.append(right[right_index])
            right_index += 1

    result += left[left_index:]
    result += right[right_index:]
    print(left, right)
    return result


def merge_sort(array):
    if len(array) <= 1:  # base case
        return array
    half = len(array) // 2
    left = merge_sort(array[:half])
    right = merge_sort(array[half:])
    return merge(left, right)


# Demonstrate the step by step, merge process, of an array being sorted, using
# merge sort . Start the step by step from the line below:
# 73    5 4    6 8    2 1


with Stopwatch("Merge sort"):
    print(merge_sort([7, 3, 5, 4, 6, 8, 2, 1]))


# Run the sorting by selection and insertion algorithms for sorted, inversely
# sorted, and random data entries, then compare them. Make tests for entries of
# size 10,000, 100,000, 1,000,000.


sorted = list(range(10000))
inverse_sorted = list(reversed(range(10000)))
randomized = sorted[:]
shuffle(randomized)


def selection_sort(array):
    for i in range(len(array)):
        min_idx = i
        for j in range(i+1, len(array)):
            if array[min_idx] > array[j]:
                min_idx = j
        array[i], array[min_idx] = array[min_idx], array[i]
    return array


def insertion_sort(array):
    for i in range(1, len(array)):
        key = array[i]
        j = i-1
        while j >= 0 and key < array[j] :
                array[j + 1] = array[j]
                j -= 1
        array[j + 1] = key
    return array


with Stopwatch("Selection sort"):
    print(selection_sort(randomized[:])) # Randomized n=10000. Time: 1.87s


with Stopwatch("Selection sort (sorted)"):
    print(selection_sort(sorted[:])) # Sorted n=10000. Time: 1.87s


with Stopwatch("Insertion sort"):
    print(insertion_sort(randomized[:])) # Randomized n=10000. Time: 2.02s


with Stopwatch("Insertion sort (sorted)"):
    print(insertion_sort(sorted[:])) # Sorted n=10000. Time: 0.001s