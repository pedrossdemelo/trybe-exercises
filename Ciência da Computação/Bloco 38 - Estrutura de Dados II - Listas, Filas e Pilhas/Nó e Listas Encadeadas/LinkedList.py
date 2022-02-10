from Node import Node


class LinkedList:

    def __init__(self):
        self.head_value = None
        self.__length = 0

    def __str__(self):
        return f"LinkedList(len={self.__length}, value={self.head_value})"

    def __len__(self):
        return self.__length
    
    def clear(self):
        self.__init__()

    def __get_node_at(self, position):
        if position < 1: return self.head_value
        if position >= len(self): return None
        value_to_be_returned = self.head_value
        if value_to_be_returned:
            while position > 0 and value_to_be_returned.next:
                value_to_be_returned = value_to_be_returned.next
                position -= 1
        return value_to_be_returned

    def insert_first(self, value):
        first_value = Node(value)
        first_value.next = self.head_value
        self.head_value = first_value
        self.__length += 1

    def insert_last(self, value):
        return self.insert_at(value, len(self))

    def insert_at(self, value, position):
        if position < 1:
            return self.insert_first(value)
        if position > len(self):
            return self.insert_last(value)
        previous_to_be_inserted = self.__get_node_at(position - 1)
        new_value = Node(value)
        new_value.next = previous_to_be_inserted.next
        previous_to_be_inserted.next = new_value
        self.__length += 1
        return

    def remove_first(self):
        value_to_be_removed = self.head_value
        if value_to_be_removed:
            self.head_value = self.head_value.next
            value_to_be_removed.next = None
            self.__length -= 1
        return value_to_be_removed

    def remove_last(self):
        if len(self) <= 1:
            return self.remove_first()
        return self.remove_at(len(self)-1)

    def remove_at(self, position):
        if position < 1:
            return self.remove_first()
        if position >= len(self):
            return self.remove_last()

        previous_to_be_removed = self.__get_node_at(position - 1)
        value_to_be_removed = previous_to_be_removed.next
        previous_to_be_removed.next = value_to_be_removed.next
        self.__length -= 1

        return value_to_be_removed

    def get_element_at(self, position):
        return Node(self.__get_node_at(position).value)

    def is_empty(self):
        return not self.__length

    def index_of(self, value):
        position = 0
        value_to_be_returned = self.head_value
        while value_to_be_returned:
            if value_to_be_returned.value == value:
                return position
            value_to_be_returned = value_to_be_returned.next
            position += 1
        return -1
    
    def remove_duplicates(self):
        if not self.__length:
            return
        current_node = self.head_value
        while current_node:
            next_node = current_node.next
            while next_node:
                if current_node.value == next_node.value:
                    next_node = next_node.next
                    self.remove_at(self.index_of(current_node.value) + 1)
                else:
                    next_node = next_node.next
            current_node = current_node.next


if __name__ == "__main__":
    linked_list = LinkedList()

    print(linked_list.is_empty()) # output: True
    linked_list.insert_first(1)
    print(linked_list) # output: LinkedList(len=1 value=Node(value=1 next=None))

    linked_list.insert_first(2)
    print(linked_list) # output: LinkedList(len=2 value=Node(value=2 next=Node(value=1 next=None)))

    linked_list.insert_last(3)
    print(linked_list) # output: LinkedList(len=3 value=Node(value=2 next=Node(value=1 next=Node(value=3 next=None))))

    linked_list.remove_last()
    print(linked_list) # output: LinkedList(len=2 value=Node(value=2 next=Node(value=1 next=None)))

    linked_list.remove_first()
    print(linked_list) # output: LinkedList(len=1 value=Node(value=1 next=None))

    linked_list.insert_at(5, 1)
    print(linked_list) # output: LinkedList(len=2 value=Node(value=1 next=Node(value=5 next=None)))

    linked_list.remove_at(0)
    print(linked_list) # output: LinkedList(len=1 value=Node(value=5 next=None))

    linked_list.insert_at(6, 1)
    linked_list.insert_at(7, 2)
    linked_list.insert_at(8, 3)
    linked_list.insert_at(9, 4)
    print(linked_list.get_element_at(3)) # output: Node(value=8 next=None)

    linked_list.clear()
    for i in range(10):
        linked_list.insert_first(1)

    print(linked_list)
    linked_list.insert_at(69, 3)
    print(linked_list)
    for i in range(10):
        print(linked_list.get_element_at(i))
    print(linked_list)
    linked_list.remove_at(3)
    linked_list.insert_last(69)
    print(linked_list)
    print(linked_list.index_of(69))

    linked_list.remove_duplicates()
    print(linked_list)
