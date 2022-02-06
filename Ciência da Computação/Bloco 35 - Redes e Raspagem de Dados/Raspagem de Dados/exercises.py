import requests


body = requests.get("https://httpbin.org/encoding/utf8").text
print(body)