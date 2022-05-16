const router = require("express").Router();
const fetch = require("node-fetch");

router.get("/price", (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || authorization.length !== 12)
    return next({ code: "Invalid token", status: 401 });
  fetch("https://api.coindesk.com/v1/bpi/currentprice/BTC.json", {
    headers: {
      Authorization: "86567349784e",
    },
  })
    .then((response) => response.json())
    .then((data) => res.send(data.bpi.USD.rate))
    .catch((error) => next(error));
});

module.exports = router;
