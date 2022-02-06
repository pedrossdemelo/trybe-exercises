curl -X GET --url https://api.github.com/zen # GET Zen of Github
curl -X POST https://reqbin.com/echo/post/json -d '{"login":"my_login","password":"my_password"}' # POST JSON to reqbin.com
curl -X POST https://reqbin.com/echo/post/json -H "Content-Type: application/json" -d '{"productId": 123456, "quantity": 100}' # POST JSON to reqbin.com with headers