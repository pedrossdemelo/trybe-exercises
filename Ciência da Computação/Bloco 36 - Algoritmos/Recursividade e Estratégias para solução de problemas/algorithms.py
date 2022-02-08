# Create a non-recursive algorithm to count how many even numbers there are in a number sequence (1 to n).

def count_evens(nums): return len([x for x in nums if x % 2 == 0])

# Implement the same algorithm, but this time recursively.

def count_evens_recursive(nums):
    if len(nums) == 0: return 0
    if nums[0] % 2 == 0: return 1 + count_evens_recursive(nums[1:])
    else: return count_evens_recursive(nums[1:])

# Create a recursive algorithm that finds the largest integer in a list. 

def largest_int(nums, largest=float('-inf')):
    if len(nums) == 0: return largest
    if nums[0] > largest: largest = nums[0]
    return largest_int(nums[1:], largest)

# Write a recursive algorithm to find the greatest common divisor of two integers. 

def gcd(a, b):
    if b == 0: return a
    return gcd(b, a % b)
