from math import factorial
from stack import Stack
from queue import Queue


if __name__ == '__main__':
    # A commercial parking garage has a line-shaped garage, i.e. you can only
    # stop cars that are lined up. To help the people who work at the parking
    # lot, we will write a program so that they can add new vehicles to the
    # garage and remove the vehicles as the customers request. Write a program
    # that does both of these operations, adding vehicles and removing the
    # desired vehicle. Remember that the vehicles that have been removed to get
    # to the customer's vehicle, are stopped on the street and then added in the
    # same order as they were in the garage.

    # Example:
    # garage = Queue(1,2,3,4,5,6,7,8,9,10)
    # We need to get car 4 out of the garage,
    # but we the cars before him must be in the same order as before.
    # So they will wait on the street while car 4 is getting out.
    # street = Stack(1, 2, 3)
    # We remove the car 4 from the garage.
    # garage = Queue(5,6,7,8,9,10)
    # We add the cars on the street to the garage in the same order
    # as they before.
    # garage = Queue(1,2,3,5,6,7,8,9,10)

    garage = Queue()
    for i in range(1, 11):
        garage.push(i) # add cars to the garage
    
    print(garage) # output: Queue(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

    def remove_car(garage, car_number):
        street = Stack()
        index_of_car = garage.index(car_number)
        for _ in range(index_of_car):
            print(f"{str(street.push(garage.pop()))} is getting out")
        print(f"Cars on the street: {street}")
        print(f"Car is successfully removed: {garage.pop()}")
        print("Getting the cars back to the garage...")
        for _ in range(index_of_car):
            print(f"{str(garage.unshift(street.pop()))} is getting back in")
        return garage

    # print(remove_car(garage, 4)) # output: Queue(1, 2, 3, 5, 6, 7, 8, 9, 10)

    def solve_expression(expr):
        stack = Stack()
        tokens_list = expr.split(' ')

        for token in tokens_list:
            match token:
                case '+': stack.push(stack.pop() + stack.pop())
                case '-': stack.push(stack.pop() - stack.pop())
                case '*': stack.push(stack.pop() * stack.pop())
                case '/': stack.push(stack.pop() / stack.pop())
                case '^': stack.push(stack.pop() ** stack.pop())
                case '%': stack.push(stack.pop() % stack.pop())
                case '!': stack.push(factorial(stack.pop()))
                case _: stack.push(int(token))
        return stack.pop()

    print(solve_expression("5 10 + 3 *")) # output: 45

    def reverse_substring_inside_parentheses(string):
        main_stack = [[]]
        for char in string:
            match char:
                case '(': main_stack.append([])
                case ')':
                    last_chain = main_stack.pop()
                    main_stack[-1] += last_chain[::-1]
                case _: main_stack[-1].append(char)
        return ''.join(main_stack.pop())
    
    print(reverse_substring_inside_parentheses("oie(abcd)")) # output: oiedcba
