class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return f"<{self.valor} de {self.naipe}>"


class Baralho:
    naipes = 'copas ouros espadas paus'.split()
    valores = 'A 2 3 4 5 6 7 8 9 10 J Q K'.split()

    def __init__(self, reverse_order = False):
        self.__cards = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]
        self.__reverse_order = reverse_order
        self.__index = len(self) if reverse_order else 0

    def __len__(self):
        return len(self.__cards)

    def __iter__(self):
        return self

    def __next__(self):
        if self.__reverse_order:
            if self.__index <= 0:
                self.__index = len(self)
                raise StopIteration
            else:
                carta = self.__cards[self.__index - 1]
                self.__index -= 1
                return carta
        
        else:
            if self.__index >= len(self.__cards):
                self.__index = 0
                raise StopIteration
            else:
                carta = self.__cards[self.__index]
                self.__index += 1
                return carta

print("\nTraversing a deck of cards:\n")
for carta in Baralho():
    print(carta)

print("\nTraversing a deck of cards in reverse order:\n")
for carta in Baralho(reverse_order=True):
    print(carta)
