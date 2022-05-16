from Node import DoublyLinkedNode

class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.__length = 0

    def insert_first(self, value):
        new_node = DoublyLinkedNode(value)
        if(self.head == None):
            self.head = self.tail = new_node
            self.head.previous = None
            self.tail.next = None
        else:
            self.tail.next = new_node
            new_node.previous = self.tail
            self.tail = new_node
            self.tail.next = None
        self.__length += 1

    def __str__(self):
        return f"DoublyLinkedList(len={self.__length}, value={self.head})"

    def remove_duplicates(self):
        if(self.head == None):
            return
        else:
            curr = self.head;
            while(curr != None):
                index_val = curr.next
                while(index_val != None):
                    if(curr.value == index_val.value):
                        self.__length -= 1
                        temp = index_val
                        index_val.previous.next = index_val.next
                        if(index_val.next != None):
                            index_val.next.previous = index_val.previous
                        temp = None
                    index_val = index_val.next
                curr = curr.next


if __name__ == "__main__":
    doubly_linked_list = DoublyLinkedList()

    for i in range(1, 11):
        doubly_linked_list.insert_first(i)

    for i in range(1, 11):
        doubly_linked_list.insert_first(i)

    print(doubly_linked_list)

    doubly_linked_list.remove_duplicates()

    print(doubly_linked_list)