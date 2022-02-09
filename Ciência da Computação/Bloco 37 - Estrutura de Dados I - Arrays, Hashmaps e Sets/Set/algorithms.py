# Bluff is a two person game where each person tries to guess the numbers that
# the other will choose. Each player chooses 5 numbers from 0 to 10, inclusive.
# The final score is calculated as follows:
# Each person's starting score is the highest number that the other person did not pick;
# The reducer is the lowest number the other person didn't pick;
# The final score is the starting score - reducer.
# Example:
# Clara = [0, 1, 5, 9, 10]
# # starting score: 5
# # reducer: 1
# # pt: 4
# Marco = [0, 2, 8, 9, 10]
# # starting score: 8
# # Reduction: 2
# # individual score: 6
# # Winner: Marco
# Implement a function that receives a dictionary with the kicked names and
# numbers and returns the name of the winner. 
# input = {
#     'Clara': [0, 1, 5, 9, 10],
#     'Marco': [0, 2, 8, 9, 10]
# }
# output: 'Marco'


def get_winner(competitors):
    intersection = set.intersection(*[set(list) for list in competitors.values()])
    players = competitors.keys()
    scores = {}
    for player in players:
        not_in_intersection = sorted([num for num in competitors[player] if num not in intersection])
        if len(not_in_intersection) == 0: return "Tie"
        if len(not_in_intersection) == 1: scores[player] = not_in_intersection[0]
        else: scores[player] = not_in_intersection[1] - not_in_intersection[0] 
    return max(scores, key=scores.get)


competitors = {
    'Clara': [0, 1, 5, 9, 10],
    'Marco': [0, 2, 8, 9, 10]
}


print(get_winner(competitors)) # Marco


# Given a string, find the size of the largest substring that has no repeated
# characters. Acceptable time limit complexity: O(n^2).


def largest_non_repeated_substring_size(string):
    max_length_substring = []
    current_substring = []
    for letter in string:
        if letter in current_substring:
            current_substring = current_substring[current_substring.index(letter)+1:]
            current_substring.append(letter)
        else: current_substring.append(letter)
        if len(max_length_substring) < len(current_substring):
            max_length_substring = current_substring
    return len(max_length_substring)


print(largest_non_repeated_substring_size("abacabad")) # 3
