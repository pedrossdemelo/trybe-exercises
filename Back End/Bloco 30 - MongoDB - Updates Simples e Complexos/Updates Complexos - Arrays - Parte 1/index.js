const { MongoClient } = require("mongodb");

(async function main() {
  const client = new MongoClient("mongodb://localhost:27017");
  try {
    await client.connect();
    const db = client.db("class");
    const movies = db.collection("movies");

    console.log("Retrieving all movies...");
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
        budget: 1,
      },
      {
        title: "Home Alone",
        category: ["family", "comedy"],
        imdbRating: 7.4,
      },
    ]);
    console.log("Done!");

    console.log("Exercise 1");
    console.log(
      await movies.findOneAndUpdate(
        { title: "Batman" },
        { $push: { category: "superhero" } }
      )
    );
    console.log("Added category superhero to Batman");

    console.log("Exercise 2");
    console.log(
      await movies.findOneAndUpdate(
        { title: "Batman" },
        { $push: { category: { $each: ["villain", "comic-based"] } } }
      )
    );
    console.log("Added categories villain and comic-based to Batman");

    console.log("Exercise 3");
    console.log(
      await movies.findOneAndUpdate(
        { title: "Batman" },
        { $pull: { category: "action" } }
      )
    );
    console.log("Removed category action from Batman");

    console.log("Exercise 4");
    console.log(
      await movies.findOneAndUpdate(
        { title: "Batman" },
        { $pop: { category: -1 } }
      )
    );
    console.log("Removed first element from category array of Batman");
  } catch (error) {
    console.error(error)
  } finally {
    client.close();
  }
})();
