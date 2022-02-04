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

    console.log("Exercise 3");
    console.log(
      await movies.updateOne(
        { title: "Batman" },
        { $push: { ratings: { $each: [85, 100, 102, 105] } } }
      )
    );
    console.log("Created an array of ratings for the Batman movie");

    console.log("Exercise 4");
    console.log(
      await movies.updateOne(
        { title: "Godzilla" },
        { $push: { ratings: { $each: [78, 52, 95, 102] } } }
      )
    );
    console.log("Created an array of ratings for the Godzilla movie");

    console.log("Exercise 5");
    console.log(
      await movies.updateOne(
        { title: "Home Alone" },
        { $push: { ratings: { $each: [200, 99, 65] } } }
      )
    );
    console.log("Created an array of ratings for the Home Alone movie");

    console.log("Exercise 6");
    console.log(
      await movies
        .find({ ratings: { $elemMatch: { $gt: 103 } } })
        .project({ _id: 0, title: 1, ratings: 1 })
        .toArray()
    );

    console.log("Exercise 7");
    console.log(
      await movies
        .find({ ratings: { $elemMatch: { $gt: 100, $lt: 105 } } })
        .project({ _id: 0, title: 1, ratings: 1 })
        .toArray()
    );

    console.log("Exercise 8");
    console.log(
      await movies
        .find({ ratings: { $elemMatch: { $gt: 64, $lt: 105, $mod: [9, 0] } } })
        .project({ _id: 0, title: 1, ratings: 1 })
        .toArray()
    );

    console.log("Exercise 9");
    console.log(
      await movies
        .find({ category: "adventure", ratings: { $elemMatch: { $gt: 103 } } })
        .project({ _id: 0, title: 1, ratings: 1, category: 1 })
        .toArray()
    );

    console.log("Exercise 10");
    console.log(
      await movies
        .find({ category: { $size: 2 } })
        .project({ _id: 0, title: 1 })
        .toArray()
    );

    console.log("Exercise 11");
    console.log(
      await movies
        .find({ ratings: { $size: 4 } })
        .project({ _id: 0, title: 1 })
        .toArray()
    );

    console.log("Exercise 12");
    console.log(
      await movies
        .find({ budget: { $mod: [5, 0] }, category: { $size: 2 } })
        .toArray()
    );

    console.log("Exercise 13");
    console.log(
      await movies
        .find({ $or: [{ category: "sci-fi" }, { ratings: { $gt: 199 } }] })
        .project({ _id: 0, title: 1, ratings: 1, category: 1 })
        .toArray()
    );

    console.log("Exercise 14");
    console.log(
      await movies
        .find({
          $and: [
            { ratings: { $size: 4 } },
            { $or: [{ category: "adventure" }, { category: "family" }] },
            { imdbRating: { $gte: 7 } },
          ],
        })
        .toArray()
    );

    console.log("Exercise 15");
    console.log(
      await movies.updateOne(
        { title: "Batman" },
        {
          $set: {
            description:
              "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.",
          },
        }
      )
    );
    console.log("Added a description for the Batman movie");

    console.log("Exercise 16");
    console.log(
      await movies.updateOne(
        { title: "Godzilla" },
        {
          $set: {
            description:
              "The world is beset by the appearance of monstrous creatures, but one of them may be the only one who can save humanity.",
          },
        }
      )
    );
    console.log("Created a description for the Godzilla movie");

    console.log("Exercise 17");
    console.log(
      await movies.updateOne(
        { title: "Home Alone" },
        {
          $set: {
            description:
              "An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation.",
          },
        }
      )
    );
    console.log("Created a description for the Home Alone movie");

    console.log("Exercise 18");
    console.log(
      await movies.find({ description: { $regex: /^The/ } }).toArray()
    );

    console.log("Exercise 19");
    console.log(
      await movies.find({ description: { $regex: /humanity.$/ } }).toArray()
    );

    console.log("Exercise 20");
    console.log(await movies.createIndex({ description: "text" }));

    console.log("Exercise 21");
    console.log(
      await movies.find({ $text: { $search: "vacation" } }).toArray()
    );
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
})();
