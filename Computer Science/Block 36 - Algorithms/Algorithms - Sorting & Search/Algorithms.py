from random import shuffle
from Stopwatch import Stopwatch


# Given an array with the following elements: ["zebra", "macaco", "elefante",
# "arara", "javali"], after two iterations using bubble sort , what would this
# array look like?


def bubble_sort(arr):
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
    print(bubble_sort(["zebra", "monkey", "elephant", "macaw", "boar"]))


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


# with Stopwatch("Selection sort"):
#     print(selection_sort(randomized[:])) # Randomized n=10000. Time: 1.87s


# with Stopwatch("Selection sort (sorted)"):
#     print(selection_sort(sorted[:])) # Sorted n=10000. Time: 1.87s


# with Stopwatch("Selection sort (inverse sorted)"):
#     print(selection_sort(inverse_sorted[:])) # Sorted n=10000. Time: 1.97s


# with Stopwatch("Insertion sort"):
#     print(insertion_sort(randomized[:])) # Randomized n=10000. Time: 2.02s


# with Stopwatch("Insertion sort (sorted)"):
#     print(insertion_sort(sorted[:])) # Sorted n=10000. Time: 0.001s


# with Stopwatch("Insertion sort (inverse sorted)"):
#     print(insertion_sort(inverse_sorted[:])) # Sorted n=10000. Time: 4.16s


# with Stopwatch("Merge sort"):
#     print(merge_sort(randomized[:])) # Randomized n=10000. Time: 0.05s O(n log n)


# with Stopwatch("Bubble sort"):
#     print(bubble_sort(randomized[:])) # Randomized n=10000. Time: 6.12s O(n^2)


# Convert a recursive binary search into an iterative one.


def binary_search_recursive(arr, low, high, target):
    if high >= low:
        mid = (high + low) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] > target:
            return binary_search_recursive(arr, low, mid - 1, target)
        else:
            return binary_search_recursive(arr, mid + 1, high, target)
    else: return -1


def binary_search_iterative(arr, target):
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = (high + low) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] > target:
            high = mid - 1
        else:
            low = mid + 1
    return -1


# To find out which commit introduced an error into the system, we need to go
# back in time by checking old commits in order to discover a commit where the
# tests fail. Assuming this will be represented as an array of booleans , find
# the index where the error first occurred.  Since tests take time to run, solve
# the problem by running as few tests as possible. 

def binary_search_first_error(commits):
    left, right = 0, len(commits) - 1
    result = "No error found"
    while left <= right:
        mid = (left + right) // 2
        if commits[mid] == False:
            result = mid
            right = mid - 1
        else:
            left = mid + 1
    return result

print(binary_search_first_error([True, True, True, True, False, False, False])) # Expected: 4