from stack import Stack


class Queue(Stack):
    def __init__(self):
        super().__init__()

    def unshift(self, value):
        self._data.insert(0, value)
        return value

    def pop(self):
        if self.is_empty():
            return None

        value = self._data[0]
        del self._data[0]
        return value

    def peek(self):
        if self.is_empty():
            return None
        value = self._data[0]
        return value

    def __str__(self):
        str_items = ""
        for i in range(self.size()):
            value = self._data[i]
            str_items += str(value)
            if i + 1 < self.size():
                str_items += ", "

        return "Queue(" + str_items + ")"


if __name__ == '__main__':
    elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    content_queue = Queue()

    for elem in elements:
        content_queue.push(elem)

    print(content_queue)  # output: Queue(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    print(content_queue.size())  # output: 10
    print(content_queue.peek())  # output: 1
    print(content_queue.pop())  # output: 1, the function returns the item being removed
    print(content_queue.peek())  # output: 2, the new top of the stack
    print(content_queue.size())  # output: 9
