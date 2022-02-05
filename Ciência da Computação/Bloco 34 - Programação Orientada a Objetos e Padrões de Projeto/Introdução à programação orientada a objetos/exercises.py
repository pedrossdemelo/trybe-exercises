# Messages are the way that objects interact by calling each other's functions.

class Rectangle:
    def __init__(self, height, width) -> None:
        self.height, self.width = height, width

    def get_area(self) -> int:
        return self.height * self.width

    def get_perimeter(self) -> int:
        return (2 * self.height) + (2 * self.width)


class Circle:
    def __init__(self, radius) -> None:
        self.radius, self.width, self.height = radius, radius * 2, radius * 2

    def get_area(self) -> int:
        return 3.14 * (self.radius ** 2)

    def get_perimeter(self) -> int:
        return 2 * 3.14 * self.radius


class OrderItem:
    def __init__(self, name, price, quantity) -> None:
        self.name, self.price, self.quantity = name, price, quantity

    def get_total(self) -> float:
        return self.price * self.quantity


class Order:
    def __init__(self, items) -> None:
        self.items = items

    def get_total(self) -> float:
        total = 0
        for item in self.items:
            total += item.get_total()
        return total
    
    def get_item_names(self) -> list:
        names = []
        for item in self.items:
            names.append(item.name)
        return names
