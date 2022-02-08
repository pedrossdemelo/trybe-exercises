def contains_duplicate(numbers):
    numbers.sort() # O(n log n)
    previous_number = 'not a number';
    for number in numbers: # O(n)
        if(previous_number == number): return True
        previous_number = number

    return False

# Time complexity: O(n log n)

# Best case scenario:
# Array is already sorted and the duplicate is at the second index
# Time complexity is O(2)

# Average case scenario:
# Array is unsorted and the duplicate is at the middle index
# Time complexity is O(n log n)

# Worst case scenario:
# Array is unsorted and the duplicate is at the last index
# Time complexity is O(n log n)