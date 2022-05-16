# Using python 3.10.1
from math import ceil


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


# Pedro Sousa
print(longest_word(["hello", "my", "name", "is", "Pedro Sousa"]))


def calc_paint_needed(wall_size):
    paint_needed = wall_size / 3
    paint_buckets_needed = ceil(paint_needed / 18)
    return (paint_buckets_needed, paint_buckets_needed * 80)


print(calc_paint_needed(100))  # (2, 160)


def typeof_triangle(*sides):
    if len(sides) != 3:
        return "Not a triangle"
    a, b, c = sorted(sides)
    if a + b <= c:
        return "Not a triangle"
    if a == b == c:
        return "Equilateral"
    if a == b or b == c or a == c:
        return "Isosceles"
    return "Scalene"


print(typeof_triangle(2, 2, 3))  # Isosceles
