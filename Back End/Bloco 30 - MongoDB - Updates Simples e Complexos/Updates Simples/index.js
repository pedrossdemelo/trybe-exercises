const { MongoClient } = require("mongodb");

(async function main() {
  try {
    const client = await MongoClient.connect("mongodb://localhost:27017/", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = client.db("class");
    const movies = db.collection("movies");

    movies.find({}).toArray().length === 0 &&
    movies.insertMany([
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
  } catch (error) {
  } finally {
    await client.close();
  }
})();
