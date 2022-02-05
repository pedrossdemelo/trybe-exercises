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
