from parsel import Selector
import requests


body = requests.get("https://httpbin.org/encoding/utf8").text
# print(body)


github_json = requests.get("https://api.github.com/users").json()
github_users = ["{} {}".format(user["login"], user["url"]) for user in github_json]
# for user in github_users:
#     print(user)


spoofed_headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0",
    "Accept": "text/html"
}
test_bot_detection = requests.get("https://scrapethissite.com/pages/advanced/?gotcha=headers", headers=spoofed_headers).text
# print("bot detected" not in test_bot_detection) # True


def get_book(book_url):
    base_url = "http://books.toscrape.com"
    book_html = requests.get(base_url + book_url).text
    selector = Selector(text=book_html)
    price = selector.css(".price_color::text").re_first("[0-9,.]+")
    title = selector.css(".product_main h1::text").get()
    description = list(filter(lambda text: text.endswith("...more"), selector.css(
        ".product_page p::text").getall()))[0][:-len("...more")]
    thumbnail_url = selector.css(".thumbnail img::attr(src)").get()[
        len("../.."):]
    thumbnail = requests.get(base_url + thumbnail_url).content
    in_stock = list(filter(lambda text: "available" in text,
        selector.css(".instock.availability::text").getall()))[0].strip()
    formatted_book = f"{title} - {price} - {in_stock}\n{description}"

    with open(f"{title}.txt", "wb") as description_file:
        description_file.write(formatted_book.encode("utf-8"))

    with open(f"{title}.jpg", "wb") as thumbnail_file:
        thumbnail_file.write(thumbnail)


get_book("/catalogue/the-grand-design_405/index.html")
get_book("/catalogue/sapiens-a-brief-history-of-humankind_996/index.html")