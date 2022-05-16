from pymongo import MongoClient


client = MongoClient('localhost', 27017)
db = client.lesson
books = db.books


def get_all_titles_by_category(category):
    return books.find({"categories": category}, {"title": 1, "_id": 0})


# java_books = get_all_titles_by_category("Java") # Java 🤮
# for book in java_books:
#     print(book["title"])


def get_amount_by_category():
    all_published_books = books.find({"status": "PUBLISH"})
    categories = set()
    for book in all_published_books:
        for category in book["categories"]:
            categories.add(category)
    amount_of_books_by_category = {}
    for category in categories:
        if category == "":
            continue
        amount_of_books_by_category[category] = books.count_documents({"categories": category})
    sorted_by_amount_of_books = sorted(amount_of_books_by_category.items(), key=lambda x: x[1], reverse=True)
    stats = ""
    for category, amount in sorted_by_amount_of_books:
        stats += f"{category}: {amount}\n"
    with open("stats.txt", "w") as stats_file:
        stats_file.write(stats)


get_amount_by_category()