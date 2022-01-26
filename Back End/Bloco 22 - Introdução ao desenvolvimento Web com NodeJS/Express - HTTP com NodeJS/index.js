const express = require("express");
const app = express();
const fs = require("fs").promises;
app.use(express.json());

app.get("/ping", (_, res) => {
  res.json({ message: "pong" });
});

app.post("/hello", (req, res) => {
  const { name } = req.body;
  res.json({ message: `Hello ${name}` });
});

app.post("/greetings", (req, res) => {
  const { name, age } = req.body;
  if (age > 17) return res.status(200).json({ message: `Hello ${name}` });
  return res.status(401).json({ message: "Unauthorized" });
});

app.put("/users/:name/:age", (req, res) => {
  res.status(200).json({
    message: `Seu nome é ${req.params.name} e você tem ${req.params.age} anos de idade`,
  });
});

app.put("/simpsons/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  if (typeof name !== "string" || isNaN(id))
    return res.status(400).json({ message: "Invalid request" });
  try {
    const data = await fs.readFile("database/simpsons.json", "utf8");
    const json = JSON.parse(data);
    const index = json.findIndex((character) => character.id === id);
    if (index === -1)
      return res.status(404).json({ message: "Character not found" });
    json[index].name = name;
    await fs.writeFile("database/simpsons.json", JSON.stringify(json));
    return res.status(201).json({ message: "Character updated" });
  } catch (error) {
    return res.status(500).json({ message: `Internal server error\n${error}` });
  }
});

app.get("/simpsons", async (_, res) => {
  try {
    res.setHeader("Content-Type", "application/json");
    res.send(await fs.readFile("database/simpsons.json", "utf8"));
  } catch (error) {
    res.status(500).json({ message: `Internal server error\n${error}` });
  }
});

app.listen(3001, (_) => console.log("Server running on port 3001"));
