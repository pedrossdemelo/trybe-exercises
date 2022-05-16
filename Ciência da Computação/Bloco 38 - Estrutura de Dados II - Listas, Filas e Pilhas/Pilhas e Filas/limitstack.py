from stack import Stack


class LimitStack(Stack):
    def __init__(self, limit):
        super().__init__()
        self._limit = limit

    def push(self, item):
        if self.size() < self._limit:
            super().push(item)
        else:
            raise OverflowError("Stack is full")
    
    def __str__(self):
        str_items = ""
        for i in range(self.size()):
            value = self._data[i]
            str_items += str(value)
            if i + 1 < self.size():
                str_items += ", "

        return "LimitStack(limit=" + str(self._limit) + ", data=[" + str_items + "])"
        

if __name__ == "__main__":
    elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    content_stack = LimitStack(5)

    try:
        for elem in elements:
            content_stack.push(elem)
    except OverflowError as e:
        print(e)

    print(content_stack.size()) # output: 5