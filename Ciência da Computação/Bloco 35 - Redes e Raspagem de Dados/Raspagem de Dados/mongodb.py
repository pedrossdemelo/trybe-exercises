from pymongo import MongoClient


client = MongoClient('localhost', 27017)
db = client.lesson
books = db.books


def get_all_titles_by_category(category):
    return books.find({"categories": category}, {"title": 1, "_id": 0})


java_books = get_all_titles_by_category("Java") # Java 🤮
for book in java_books:
    print(book["title"])

