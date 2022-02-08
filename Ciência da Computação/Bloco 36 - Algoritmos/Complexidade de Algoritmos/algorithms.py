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
# Time complexity is O(1)

# Average case scenario:
# Array is unsorted and the duplicate is at the middle index
# Time complexity is O(n log n)

# Worst case scenario:
# Array is unsorted and the duplicate is at the last index
# Time complexity is O(n log n)

##########################################################################################

#  Suppose you are writing a function for a naval battle game. Given a
#  two-dimensional array with n rows and m columns, and a pair of coordinates x
#  for rows and y for columns, the algorithm checks whether there is a ship at
#  the target coordinate. For example:

# input = [ 0 0 0 0 1
#           0 0 0 0 1
#           1 1 1 1 1
#           0 0 0 1 0 ]

# result for (0, 4) = True
# result for (1, 1) = False

# Time complexity: 0(n * m)
# Space complexity: 0(n * m)

# Exercício 5 Utilize o módulo random da linguagem Python para gerar um array com
# 100 números. Cada um desses números deve ser a média de dez números gerados
# aleatóriamente. Qual é a ordem de complexidade de tempo e de espaço deste
# programa? 

import random

def random_array(size):
    array = []
    for i in range(size):
        array.append(random.randint(1, 10))
    return array
# Time complexity: O(n)
# Space complexity: O(n)

def kids_with_candies(candies, extra_candies):
    max_candies = max(candies)
    return [candy + extra_candies >= max_candies for candy in candies]


print(kids_with_candies([2, 3, 5, 1, 3], 3))