class MainMemory:
    def __init__(self):
        self.clean()

    def load(self, value):
        self.loaded_memory.append(value)

    def get(self, index):
        if index >= 0 and index < len(self.loaded_memory):
            return self.loaded_memory[index]
        return 0

    def clean(self):
        self.loaded_memory = []

