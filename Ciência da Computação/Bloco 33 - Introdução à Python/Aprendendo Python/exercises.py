# Using python 3.10.1
def higher(x, y):
    return x if x > y else y


print(higher(10, 5))  # 10


def average(*num):
    return sum(num) / len(num)


print(average(1, 2, 3, 4, 5))  # 3.0


def create_sqr(size):
    return f"{'*' * size}\n" * size


print(create_sqr(5))
"""
*****
*****
*****
*****
*****
"""


def longest_word(words):
    return max(words, key=len)


print(longest_word(["hello", "my", "name", "is", "Pedro Sousa"]))  # Pedro Sousa