const express = require("express");
const app = express();
app.use(express.json());
const { Book } = require("./models");

app.get("/books", async (_req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})
app.listen(3000, () => console.log("Server is running on port 3000"));
