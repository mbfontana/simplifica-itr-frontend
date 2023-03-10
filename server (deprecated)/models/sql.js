import mysql from "mysql2/promise";

const connectionInformations = {
  host: "localhost",
  user: "root",
  password: "password",
  database: "simplificaitr",
};

export default class BancodeDados {
  static async testeDB() {
    try {
      const connection = await mysql.createConnection(connectionInformations);
      const [result, fields] = await connection.query("SELECT * FROM teste");
      connection.end();
      return result;
    } catch (error) {
      console.log(`error: ${error.message}`);
    }
  }
}
