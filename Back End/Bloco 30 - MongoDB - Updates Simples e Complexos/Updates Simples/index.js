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

    console.log("Exercise 6");
    console.log(
      await movies.updateOne({ title: "Batman" }, { $mul: { imdbRating: 4 } })
    );
    console.log("Multiplied Batman imdbRating by 4");

    console.log("Exercise 7");
    console.log(await movies.updateOne(
      { title: "Batman" },
      { $rename: { budget: "estimatedBudget" } }
    ));
    console.log("Renamed budget to estimatedBudget on Batman");

    console.log("Exercise 8");
    console.log(await movies.updateOne(
      { title: "Home Alone" }, { $min: { budget: 5 } }
    ));
    console.log("Set Home Alone budget to 5 if it is more than 5");

    console.log("Exercise 9");
    console.log(await movies.updateOne(
      { title: "Godzilla", category: "adventure" },
      {
        $max: { imdbRating: 8.6 },
        $set: { "category.$": "thriller" },
      }
    ));
    console.log("Removed adventure from Godzilla category list, set imdbRating to 8.6 and added thriller to categories");

    console.log("Exercise 10");
    console.log(await movies.updateOne(
      { title: "Home Alone" },
      { $currentDate: { lastUpdated: true } }
    ));
    console.log("Set lastUpdated to current date on Home Alone");

    console.log("Exercise 11");
    console.log(await movies.updateMany({}, { $set: { sequels: 0 } }));
    console.log("Set sequels to 0 on all movies");

    console.log("Exercise 12");
    console.log(await movies.updateMany({}, { $unset: { budget: "", estimatedBudget: "" } }));
    console.log("Removed budget and estimatedBudget from all movies");

  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
})();
