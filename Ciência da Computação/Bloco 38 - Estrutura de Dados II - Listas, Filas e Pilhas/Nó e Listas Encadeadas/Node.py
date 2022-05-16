class Node:
    def __init__(self, value):
        self.value = value  # Data to be stored in the node
        self.next = None  # Pointer to the next node in the linked list

    def __str__(self):
        return f"Node(value={self.value}, next={self.next})"


class DoublyLinkedNode(Node):
    def __init__(self, value):
        super().__init__(value)
        self.previous = None

    def __str__(self):
        return f"DoublyLinkedNode(value={self.value}, next={self.next})"