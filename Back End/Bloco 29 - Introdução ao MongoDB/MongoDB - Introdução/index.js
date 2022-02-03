const { MongoClient } = require("mongodb");

(async function main() {
  const client = new MongoClient(
    "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.1.9"
  );
  try {
    await client.connect();
    const db = client.db("lesson");
    const books = db.collection("books");
    const bios = db.collection("bios");
    
    console.log("Exercise 1");
    console.log(await bios.findOne({ _id: 8 }));
    
    console.log("Exercise 2");
    console.log(await bios.findOne({ _id: 8 }, { _id: 1, name: 1 }));

    console.log("Exercise 3");
    console.log(await bios.findOne({ _id: 8 }, { name: 1, birth: 1 }));
    
    console.log("Exercise 4");
    console.log(await bios.find({ "name.first": "John" }).toArray());
    
    console.log("Exercise 5");
    console.log(await bios.find().limit(3).toArray());
    
    console.log("Exercise 6");
    console.log(await bios.find().skip(5).limit(2).toArray());
    
    // Using the books collection

    console.log("Exercise 7");
    console.log(await books.countDocuments());
    
    console.log("Exercise 8");
    console.log(await books.countDocuments({ status: "PUBLISH" }));
    
  } catch (error) {
    console.error(`Something went wrong: ${error}`);
  } finally {
    client.close();
  }
})();
