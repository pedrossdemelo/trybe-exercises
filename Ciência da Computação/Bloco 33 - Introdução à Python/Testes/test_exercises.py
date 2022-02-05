from exercises import fizzbuzz_seq, sequence_to_phonenum, remove_invalid_emails


def test_fizzbuzz_seq():
    assert fizzbuzz_seq(15) == [1, 2, "Fizz", 4, "Buzz", "Fizz",
                                7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]