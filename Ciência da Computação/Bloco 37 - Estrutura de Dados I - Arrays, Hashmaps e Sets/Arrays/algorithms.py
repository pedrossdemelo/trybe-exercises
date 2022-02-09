from random import randint
# In a software monitor, which checks the resiliency of other software, we need
# to know the maximum time that a software has remained unstable. To do this,
# every hour a request is made to the system and we check if it is ok. Assuming
# an array containing the states collected by our software, calculate the
# maximum time that the server remained unstable.
# 1 = stable, 0 = unstable
# Input: [1,1,1,1,0,0,1]
# Output: 4

def max_stable_time(array):
    max_time = 0
    current_time = 0
    for i in range(len(array)):
        if array[i] == 1:
            current_time += 1
        else:
            max_time = max(max_time, current_time)
            current_time = 0
    return max_time

# In a card game, the cards are represented by a numerical array. To start the
# game we must shuffle the cards. We will do this by splitting a portion of
# cards into 2 and then merging the two portions. For example: 

# Example 1:
# cards = [2, 6, 4, 5]
# cards per part = 2

# result = [2, 4, 6, 5].

# Example 2:
# cards = [1, 4, 4, 7, 6, 6]
# cards per part = 3

# score = [1, 7, 4, 6, 4, 6]

def shuffle_cards(cards):
    assert len(cards) > 0 and len(cards) % 2 == 0
    left = cards[:len(cards)//2]
    right = cards[len(cards)//2:]
    for i in range(len(right)//2):
        random_idxs = set()
        while len(random_idxs) < len(right)//2:
            random_idxs.add(randint(0, len(right)-1))
        for idx in random_idxs:
            right[idx], left[idx] = left[idx], right[idx]
    return left + right


# Given an array of integer numbers that represent products in an e-commerce
# store. Check how many products form good combinations, considering that a good
# combination is when one product is equal to another and its index is higher
# than the previous one. This combination can be used to modify the products on
# a page. For example: 

# Example 1:
# products = [1, 3, 1, 1, 1, 2, 3]
# result = 4
# The indices (0, 2), (0, 3), (1, 5), (2, 3) form combinations.

# Example 2:
# products = [1, 1, 2, 3]
# result = 1
# The key figures (0, 1) form a single combination.

def good_combinations(products):
    counter = {}
    for i, product in enumerate(products):
        if product in counter:
            counter[product].append(i)
        else:
            counter[product] = [i]
    return sum([len(counter[key]) - 1 for key in counter if len(counter[key]) > 1])

# Given two arrays of integers that represent instants of entry and exit in a
# library, and a number that represents an instant to be fetched. Return how
# many people students are in the library at that instant. Consider that every
# student that entered, left the library. 

# entries = [1, 2, 3]
# exits = [3, 2, 7]
# search_instant = 4
# result: 1

# Student 1 entered at time 1 and exited at time 3, the second student entered
# and exited at time 2, and the last student was the only one to be present at time 4.

def students_in_library(entries, exits, search_instant):
    students = 0
    for entry in entries:
        if entry <= search_instant:
            students += 1
    for exit in exits:
        if exit <= search_instant:
            students -= 1
    return students


