const { MongoClient } = require("mongodb");

(async function main() {
  const client = new MongoClient("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const db = client.db("class");
    const movies = db.collection("movies");

    [...await movies.find({}).toArray()].length === 0 &&
    await movies.insertMany([
      {
        title: "Batman",
        category: ["action", "adventure"],
        imdbRating: 7.6,
        budget: 35,
      },
      {
        title: "Godzilla",
        category: ["action", "adventure", "sci-fi"],
        imdbRating: 6.6,
      },
      {
        title: "Home Alone",
        category: ["family", "comedy"],
        imdbRating: 7.4,
      },
    ]);

    console.log("Exercise 1");
    console.log(await movies.updateOne({ title: "Batman" }, { $set: { imdbRating: 7.7 } }))
    console.log("Updated Batman imdbRating to 7.7");

    console.log("Exercise 2");
    console.log(await movies.updateOne({ title: "Godzilla" }, { $set: { budget: 1 } }))
    console.log("Updated Godzilla budget to 1");

  } catch (error) {
  } finally {
    await client.close();
  }
})();
