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
print("bot detected" not in test_bot_detection) # True