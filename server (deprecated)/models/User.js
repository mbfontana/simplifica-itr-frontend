import mysql from "mysql2/promise";

const connectionInformations = {
  host: "localhost",
  user: "root",
  password: "Nanco@09",
  database: "simplificaitr",
};

const generateToken = () => {
  const random = Math.random().toString(36).slice(2);
  return random + random;
};

export default class User {
  static async register(req) {
    const request = req.body;
    const connection = await mysql.createConnection(connectionInformations);

    const [queryResponse] = await connection.query(
      "SELECT * FROM user WHERE email = ?",
      [request.email]
    );

    if (queryResponse === []) {
      console.log("Already Registered");
      connection.end();
      return undefined;
    } else {
      await connection.query(
        "INSERT INTO user (id, name, email, password, cpf) VALUES (?, ?, ?, ?, ?)",
        [
          request.id,
          request.name,
          request.email,
          request.password,
          request.cpf,
        ]
      );
      console.log("Sucessfully Registered");
      connection.end();
      return generateToken();
    }
  }

  static async login(req) {
    const request = req.body;
    const connection = await mysql.createConnection(connectionInformations);
    const [queryResponse] = await connection.query(
      "SELECT * FROM users WHERE email = ?",
      [request.email]
    );
    console.log(queryResponse);

    if (queryResponse !== []) {
      console.log("User not found");
      return undefined;
    } else {
      console.log("User found");
      const JSONresponse = {
        token: generateToken(),
        email: queryResponse[0].email,
      };
      return JSONresponse;
    }
  }
}