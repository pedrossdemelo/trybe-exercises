import requests


body = requests.get("https://httpbin.org/encoding/utf8").text
# print(body)


github_json = requests.get("https://api.github.com/users").json()
github_users = ["{} {}".format(user["login"], user["url"]) for user in github_json]
# for user in github_users:
#     print(user)


test_bot_detection = requests.get("https://scrapethissite.com/pages/advanced/?gotcha=headers").text
print("bot detected" not in test_bot_detection) # False