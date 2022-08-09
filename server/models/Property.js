import { MongoClient } from "mongodb";

const uri = "mongodb://127.0.0.1:27017/";
const client = new MongoClient(uri, { useUnifiedTopology: true });

export default class Property {
  static async register(req) {
    const conn = await client.connect();
    const db = conn.db("valmir-website");
    const registerData = req.body;
    await db.collection("Property").insertOne({
      customerCpf: registerData.customerCpf,
      nirf: registerData.propertyNirf,
      name: registerData.propertyName,
      area: registerData.propertyArea,
      condition: registerData.propertyCondition,
      cityId: registerData.propertyCity,
      federation: registerData.cityFederation,
    });
    console.log("Property Sucessfully Registered");
    conn.close();
  }
}
