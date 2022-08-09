import { MongoClient } from "mongodb";

const uri = "mongodb://127.0.0.1:27017/";
const client = new MongoClient(uri, { useUnifiedTopology: true });

export default class Customer {
  static async register(req) {
    const conn = await client.connect();
    const db = conn.db("valmir-website");
    const registerData = req.body;
    const alreadyRegistered = await db.collection("Customer").findOne({
      cpf: registerData.customerCpf,
    });
    if (alreadyRegistered) {
      console.log("Already Registered");
      conn.close();
      return undefined;
    } else {
      await db.collection("Customer").insertOne({
        cpf: registerData.customerCpf,
        name: registerData.customerName,
      });
      console.log("Sucessfully Registered");
      conn.close();
    }
  }

  static async consult(req) {
    const conn = await client.connect();
    const db = conn.db("valmir-website");
    const cpf = req.params.cpf.toString();
    const properties = await db
      .collection("Property")
      .find({
        customerCpf: cpf,
      })
      .toArray();
    // preciso procurar em City pelo preço daquela condição naquela ciadade
    // fazer um AND com o cityID e o condition e retornar o preço
    properties.forEach(async (e) => {
      const area = e.area;
      const condition = e.condition;
      console.log(condition);
      const cityName = e.cityId;
      const priceCondition = await db.collection("City").findOne(
        {
          name: cityName,
        },
        { good: 1 }
      );
      console.log(priceCondition);
    });
  }
}
