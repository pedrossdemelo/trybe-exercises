# Using python 3.10.1
def smallest(*array):
    return min(array)


print(smallest(1, 2, 3, 4, 5))


def create_square_triangle(size):
    triangle = ""
    for i in range(1, size + 1):
        triangle += "*" * i + " " * (size - i) + "\n"
    return triangle


print(create_square_triangle(5))


def sum_range(end):
    return sum(range(1, end + 1))


print(sum_range(5))


def price(amount, fuel_type):
    fuel_price = {"A": 1.9, "G": 2.5}
    discount = {"A": 0.05 if amount > 20 else 0.03,
                "G": 0.06 if amount > 20 else 0.04}
    return amount * fuel_price[fuel_type] * (1 - discount[fuel_type])


print(price(10, "A"))
