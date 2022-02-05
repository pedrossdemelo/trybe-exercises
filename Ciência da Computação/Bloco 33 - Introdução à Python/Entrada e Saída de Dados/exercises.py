import random
import json


def print_as_sqr_tri(string):
    size = len(string)
    for i in range(size, 0, -1):
        print(string[:i])


# print_as_sqr_tri("PEDRO")

def guessing_game():
    with open("words.json") as file:
        words = json.load(file)
    chosen_word, tries = random.choice(words), 3
    while tries > 0:
        scrambled_word = "".join(random.sample(chosen_word, len(chosen_word)))
        answer = input(
            f"What is the word \"{scrambled_word}\"? (You have {tries} tries left) ")
        if answer == chosen_word:
            print("You win!")
            break
        else:
            tries -= 1
            print("Wrong, try again!" if tries >
                  0 else f"You lose! The word was {chosen_word}")


guessing_game()