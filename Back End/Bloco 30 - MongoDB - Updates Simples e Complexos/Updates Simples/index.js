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

    await db.dropCollection("movies");
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

    console.log("Exercise 3");
    console.log(
      await movies.updateMany(
        { title: "Home Alone" },
        { $set: { budget: 15, imdbRating: 5.5 } }
      )
    );
    console.log("Updated Home Alone budget and imdbRating to 15 and 5.5");

    console.log("Exercise 4");
    console.log(
      await movies.updateOne({ title: "Batman" }, { $inc: { imdbRating: 2 } })
    )
    console.log("Increased Batman imdbRating by 2");

    console.log("Exercise 5");
    console.log(
      await movies.updateOne({ title: "Home Alone" }, { $inc: { budget: 5 } })
    )
    console.log("Increased Home Alone budget by 5");

  } catch (error) {
  } finally {
    await client.close();
  }
})();
