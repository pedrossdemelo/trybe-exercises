class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return f"<{self.valor} de {self.naipe}>"


class Baralho:
    naipes = 'copas ouros espadas paus'.split()
    valores = 'A 2 3 4 5 6 7 8 9 10 J Q K'.split()
    __index = 0

    def __init__(self):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return self

    def __next__(self):
        if self.__index >= len(self._cartas):
            self.__index = 0
            raise StopIteration
        carta = self._cartas[self.__index]
        self.__index += 1
        return carta


# Printing in sequential order <A de copas> to <K de paus>
# for carta in Baralho():
#     print(carta)


class BaralhoInverso(Baralho):
    def __iter__(self):
        self.__index = len(self._cartas)
        return self

    def __next__(self):
        if self.__index <= 0:
            self.__index = len(self._cartas)
            raise StopIteration
        carta = self._cartas[self.__index - 1]
        self.__index -= 1
        return carta


# Printing in reverse order <K de paus> to <A de copas>
for carta in BaralhoInverso():
    print(carta)