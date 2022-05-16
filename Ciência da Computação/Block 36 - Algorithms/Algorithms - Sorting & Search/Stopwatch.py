from time import perf_counter


class Stopwatch:
    def __init__(self, name="Algorithm"):
        self.name = name
    def __enter__(self):
        self.start = perf_counter()
    def __exit__(self, *exc):
        elapsed = perf_counter() - self.start
        print(f"{self.name} lasted for {elapsed} seconds")