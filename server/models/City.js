import { MongoClient } from "mongodb";

const uri = "mongodb://127.0.0.1:27017/";
const client = new MongoClient(uri, { useUnifiedTopology: true });

export default class City {
  static async register(req) {
    const conn = await client.connect();
    const db = conn.db("valmir-website");
    const registerData = req.body;
    await db.collection("City").insertOne({
      cityId: registerData.cityId,
      name: registerData.cityName,
      federation: registerData.cityFederation,
      good: registerData.condition1,
      regular: registerData.condition2,
      pastures: registerData.condition3,
      restrict: registerData.condition4,
    });
    console.log("City Sucessfully Registered");
    conn.close();
  }
}
