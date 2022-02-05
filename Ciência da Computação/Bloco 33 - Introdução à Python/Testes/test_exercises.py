from exercises import fizzbuzz_seq, sequence_to_phonenum, remove_invalid_emails
import pytest


def test_fizzbuzz_seq():
    assert fizzbuzz_seq(15) == [1, 2, "Fizz", 4, "Buzz", "Fizz",
                                7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]


def test_sequence_to_phonenum():
    assert sequence_to_phonenum("1-HOME-SWEET-HOME") == "1-4663-79338-4663"
    assert sequence_to_phonenum("1-4663-79338-4663") == "1-4663-79338-4663"
    assert sequence_to_phonenum("MY-MISERABLE-JOB") == "69-647372253-562"
    assert sequence_to_phonenum("") == ""
    with pytest.raises(TypeError, match="missing 1 required positional argument"):
        sequence_to_phonenum()
