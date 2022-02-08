# Create a non-recursive algorithm to count how many even numbers there are in a number sequence (1 to n).

def count_evens(nums): return len([x for x in nums if x % 2 == 0])
