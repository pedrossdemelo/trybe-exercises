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

# Write a recursive algorithm that identifies whether a number is prime.

def is_prime_recursive(n, divisor=3):
    if n == 1: return False
    if n == 2: return True
    if n % divisor == 0: return False
    if divisor ** 2 > n: return True
    return is_prime_recursive(n, divisor + 2)

# Write a recursive algorithm that solves the hanoi tower problem, following the instructions:
# The disks start lined up in the first column, and should be arranged in order of size in the last column.

def hanoi(n, start, auxilliary, destination):
    if n == 1:
        print(f'Move disc 1 from {start} to {destination}')
        return
    hanoi(n - 1, start, destination, auxilliary)
    print(f'Move disc {n} from {start} to {destination}')
    hanoi(n - 1, auxilliary, start, destination)

hanoi(3, 'A', 'B', 'C')