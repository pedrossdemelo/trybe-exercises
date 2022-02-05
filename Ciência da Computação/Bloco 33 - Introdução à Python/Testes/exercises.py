def fizzbuzz_seq(end):
    result = []
    for i in range(1, end+1):
        if i % 3 == 0 and i % 5 == 0:
            result.append("FizzBuzz")
        elif i % 3 == 0:
            result.append("Fizz")
        elif i % 5 == 0:
            result.append("Buzz")
        else:
            result.append(i)
    return result


def sequence_to_phonenum(sequence):
    map = {
        "ABC": 2,
        "DEF": 3,
        "GHI": 4,
        "JKL": 5,
        "MNO": 6,
        "PQRS": 7,
        "TUV": 8,
        "WXYZ": 9
    }
    for key in map:
        for char in key:
            sequence = sequence.replace(char, str(map[key]))
    return sequence