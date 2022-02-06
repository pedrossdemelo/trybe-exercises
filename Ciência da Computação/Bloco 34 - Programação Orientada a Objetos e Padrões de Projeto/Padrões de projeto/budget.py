from abc import ABC, abstractproperty, abstractstaticmethod


class TaxInterface(ABC):
    name = None

    @abstractstaticmethod
    def calc(self):
        raise NotImplementedError


class ISS(TaxInterface):
    name = "ISS"

    @staticmethod
    def calc(amount):
        return amount * 0.1


class ICMS(TaxInterface):
    name = "ICMS"

    @staticmethod
    def calc(amount):
        return amount * 0.06


class Orcamento:
    def __init__(self, valor, taxes):
        self.valor = valor
        self.taxes = taxes if isinstance(taxes, list) else [taxes]

    @property
    def imposto(self):
        for tax in self.taxes:
            print(f"{tax.name}: {tax.calc(self.valor)}")

        total = sum([tax.calc(self.valor) for tax in self.taxes])
        print(f"Total: {total}")
        return total


orcamento = Orcamento(1000, [ISS, ICMS])
orcamento.imposto
'''
ISS: 100.0
ICMS: 60.0
Total: 160.0
'''
orcamento2 = Orcamento(2000, ICMS)
orcamento2.imposto
'''
ICMS: 120.0
Total: 120.0
'''
