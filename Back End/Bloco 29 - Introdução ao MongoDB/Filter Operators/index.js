import { MongoClient } from "mongodb";

(async function main() {
  const client = new MongoClient("mongodb://localhost:27017");

  try {
    await client.connect();

    const db = client.db("class");
    const superheroes = db.collection("superheroes");

    console.log("Exercise 1")
    console.log(await superheroes.findOne({}));

  } catch (error) {
    console.log(`Something went wrong: ${error}`);
  } finally {
    await client.close();
  }
})();
