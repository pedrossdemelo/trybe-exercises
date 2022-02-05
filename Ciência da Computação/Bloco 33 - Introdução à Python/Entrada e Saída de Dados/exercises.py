import random
import csv
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


# guessing_game()


def calc_percent_of_category(path):
    with open(path) as file:
        data = json.load(file)
    total = len(data)
    percentages = {}
    for book in data:
        categories = book["categories"]
        for category in categories:
            if category not in percentages:
                percentages[category] = 1 / total * 100
            else:
                percentages[category] += 1 / total * 100
    return dict(sorted(percentages.items(), key=lambda x: x[1], reverse=True))



def write_to_file_csv(path, data, headers):
    with open(path, "w") as file:
        writer = csv.writer(file)
        writer.writerow(headers)
        for key, value in data.items():
            writer.writerow([key, value])


write_to_file_csv("percentages.csv", calc_percent_of_category("books.json"), ["Category", "Percentage"])
