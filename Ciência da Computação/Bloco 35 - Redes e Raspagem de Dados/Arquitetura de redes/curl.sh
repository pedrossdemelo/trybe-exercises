curl -X GET --url https://api.github.com/zen # GET Zen of Github
curl -X POST https://reqbin.com/echo/post/json -d '{"login":"my_login","password":"my_password"}' # POST JSON to reqbin.com
curl -X POST https://reqbin.com/echo/post/json -H "Content-Type: application/json" -d '{"productId": 123456, "quantity": 100}' # POST JSON to reqbin.com with headers

curl -X GET https://google.com # GET google.com, response code: 301 (Moved Permanently)
curl -X GET -L https://google.com # GET google.com follow redirects, response code: 200 (OK)

curl -X GET -o trybe.html https://www.betrybe.com # GET trybe.html to file