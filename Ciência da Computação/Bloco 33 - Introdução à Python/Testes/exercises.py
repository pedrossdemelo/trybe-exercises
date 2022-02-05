import re


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


def valid_email(email):
    regex = re.compile(r'^[a-zA-Z0-9_\-\.]+@[a-zA-Z0-9_\-]+\.[a-zA-Z]{1,3}$')
    if regex.fullmatch(email):
        return True
    else:
        return False


def remove_invalid_emails(array):
    result = []
    for email in array:
        if valid_email(email):
            result.append(email)
    return result
