from collections import Counter


# You will be given a list of words and a string . Write a function that decides
# which words can be formed from the characters in the string (each character
# can only be used once). Return the sum of the lengths of the chosen words. 
# Example 1:
# words = ["cat", "bt", "hat", "tree"], chars = "atach"
# # output: 6
# """"Explanation: The words that can be formed with the characters in the string
#                are "cat" (size 3) and "hat" (size 3).""""
# Example 2:
# words = ["hello", "world", "students"], chars = "welldonehoneyr
# # output: 10
# """Explanation: The words that can be formed from the characters in the string
#                are "hello" (length 5) and "world" (length 5).""""


def len_of_words_from_chars(words, chars):
    result = 0
    char_count = Counter(chars)
    for word in words:
        word_count = Counter(word)
        print(type(word_count))
        if word_count & char_count == word_count:
            result += len(word)
    return result


# A certain company has a hierarchical structure where each person reports to
# only one other person. Each person has a score which is the total number of
# people that are below him, including subordinates of his subordinates, in
# addition to himself. This means that a person who has no staff has score 1. A
# person with only one subordinate, and that subordinate has no staff, has
# score 2. Write a method that calculates the score of a given person.  Hint:
# To know a person's score, you need to know the score of the people in his
# team, correct? Which strategy uses the same function within itself? 
# Subordinate example:
# - 1 => 2, 3

# - 2 => 4

# - 3 => no subordinates

# - 4 => 5, 6

# - 5 => 7

# - 6 => no subordinates

# - 7 => no subordinates
# In this example, the score of each person is:
# - 1 => 5 (score 2) + 1 (score 3) + 1 (his own score) = 7

# - 2 => 4 (score 4) + 1 (own score) = 5

# - 3 => 1 (own score)

# - 4 => 2 (score 5) + 1 (score 6) + 1 (own score) = 4

# - 5 => 1 (own score 7) + 1 (own score) = 2

# - 6 => 1 (own score)

# - 7 => 1 (own score)


def calculate_score(person):
    print(person)
    if "subordinates" in person:
        # Assuming that there can only be one manager for each subordinate
        return sum(calculate_score(subordinate) for subordinate in person["subordinates"]) + 1
        # If there were multiple managers, we would need to store the subordinates in a set of ids
    return 1
person = {"id": 1, "subordinates": [{"id": 2, "subordinates": [{"id": 4, "subordinates": [{"id": 5, "subordinates": [{"id": 7}]}, {"id": 6}]}]}, {"id": 3}]}
print(calculate_score(person)) # 7