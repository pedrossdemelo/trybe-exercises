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

  } catch (error) {
    console.log(`Something went wrong: ${error}`);
  } finally {
    await client.close();
  }
})();
