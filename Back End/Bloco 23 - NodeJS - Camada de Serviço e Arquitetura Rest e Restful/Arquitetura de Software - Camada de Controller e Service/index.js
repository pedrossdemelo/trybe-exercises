const express = require("express");
const app = express();

app.use(express.json());

app.get("/ping", (_req, res) => res.json({ message: "pong" }));

app.listen(3000, () => console.log("Server started on port 3000"));
