const { MongoClient } = require("mongodb");

(async function main() {
  const client = new MongoClient("mongodb://localhost:27017/");

  try {
    await client.connect();
    const db = client.db("class");
    const movies = db.collection("movies");

    await db.dropCollection("movies");
    await movies.insertMany([
      {
        title: "Batman",
        category: ["action", "adventure"],
        imdbRating: 7.7,
        budget: 35,
      },
      {
        title: "Godzilla",
        category: ["action", "adventure", "sci-fi"],
        imdbRating: 6.6,
        budget: 10,
      },
      {
        title: "Home Alone",
        category: ["family", "comedy"],
        imdbRating: 7.4,
      },
    ]);

    console.log("Exercise 1");
    console.log(
      await movies
        .find({ category: { $all: ["action", "adventure"] } })
        .toArray()
    );

    console.log("Exercise 2");
    console.log(
      await movies
        .find({ category: { $all: ["action"] }, imdbRating: { $gt: 7 } })
        .toArray()
    );
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
})();
