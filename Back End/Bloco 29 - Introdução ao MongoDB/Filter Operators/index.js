const { MongoClient } = require('mongodb');

(async function main() {
  const client = new MongoClient("mongodb://localhost:27017");

  try {
    await client.connect();

    const db = client.db("class");
    const superheroes = db.collection("superheroes");

    console.log("Exercise 1")
    console.log(await superheroes.findOne({}));

    console.log("Exercise 2")
    console.log(await superheroes.find({
      "aspects.height": {
        $lt: 180
      }
    }).toArray());

    console.log("Exercise 3")
    console.log(await superheroes.find({
      "aspects.height": {
        $lt: 180
      }
    }).count());

    console.log("Exercise 4")
    console.log(await superheroes.find({
      "aspects.height": {
        $lte: 180
      }
    }).count());

    console.log("Exercise 5")
    console.log(await superheroes.findOne({
      "aspects.height": {
        $gte: 200
      }
    }));

    console.log("Exercise 6")
    console.log(await superheroes.find({
      "aspects.height": {
        $gte: 200
      }
    }).count());

    console.log("Exercise 7")
    console.log(await superheroes.find({
      "aspects.eyeColor": "green"
    }).toArray());

    console.log("Exercise 8")
    console.log(await superheroes.find({
      "aspects.eyeColor": "blue"
    }).count());

    console.log("Exercise 9")
    console.log(await superheroes.find({
      "aspects.hairColor": {
        $in: ["No Hair", "Black"]
      }
    }).toArray());

    console.log("Exercise 10")
    console.log(await superheroes.find({
      "aspects.hairColor": {
        $in: ["No Hair", "Black"]
      }
    }).count());

    console.log("Exercise 11")
    console.log(await superheroes.find({
      "aspects.hairColor": {
        $nin: ["No Hair", "Black"]
      }
    }).count());

    console.log("Exercise 12")
    console.log(await superheroes.find({
      "aspects.height": {
        $not: {
          $gt: 180
        }
      }
    }).count());

    console.log("Exercise 13")
    console.log(await superheroes.find({
      "aspects.height": {
        $not: {
          $gt: 180
        }
      },
      "race": {
        $not: {
          $eq: "Human"
        }
      }
    }).toArray());

    console.log("Exercise 14")
    console.log(await superheroes.find({
      publisher: "Marvel Comics",
      $or: [
        {"aspects.height": 180},
        {"aspects.height": 200}
      ]
    }).toArray())

    console.log("Exercise 15")
    console.log(await superheroes.find({
      publisher: {
        $not: {
          $eq: "DC Comics"
        }
      },
      $or: [
        {race: "Human"},
        {race: "Mutant"}
      ],
      "aspects.weight": {
        $gt: 80,
        $lt: 100,
      },
    }).toArray());

    console.log("Exercise 16");
    console.log(await superheroes.find({
      race: {
        $exists: 0
      }
    }).count());

    console.log("Exercise 17");
    console.log(await superheroes.find({
      "aspects.hairColor": {
        $exists: 1
      }
    }).count())

    console.log("Exercise 18");
    console.log(await superheroes.deleteOne({
      publisher: "Sony Pictures"
    }));
  } catch (error) {
    console.log(`Something went wrong: ${error}`);
  } finally {
    await client.close();
  }
})();
