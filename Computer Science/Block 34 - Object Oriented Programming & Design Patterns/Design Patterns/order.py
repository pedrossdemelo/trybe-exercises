from datetime import datetime


class CreditCard:
    def __init__(self, name, number, security_code, expiration_date):
        self.name = name
        self.number = number
        self.security_code = security_code
        self.expiration_date = datetime.strptime(expiration_date, "%m/%y")

    def __str__(self):
        expiraton = self.expiration_date.strftime("%m/%y")
        return f"{self.name} - {self.number} - {self.security_code} - {expiraton}"

    def __repr__(self):
        return str(self)


class Order:
    def __init__(self, items, credit_card):
        self.items = items
        self.credit_card = credit_card

    def __str__(self):
        order_list_formatted = "\n".join([item for item in self.items])
        return f"{order_list_formatted}\n{self.credit_card}"

    def __repr__(self):
        return str(self)


credit_card = CreditCard("John Doe", "1234567890123456", "123", "12/20")
items = [
    "Coffee (hot)",
    "Cheese",
    "Milk",
    "Bread",
    "Butter",
]
order = Order(items, credit_card)
print(order)
'''
Coffee (hot)
Cheese
Milk
Bread
Butter
John Doe - 1234567890123456 - 123 - 12/20
'''