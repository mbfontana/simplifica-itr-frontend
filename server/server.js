import express from "express";
import cors from "cors";
import Customer from "./models/Customer.js";
import Property from "./models/Property.js";
import City from "./models/City.js";
import User from "./models/User.js";
import BancodeDados from "./models/sql.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/", (req, res) => {
  res.send("<h1>Hi there!</h1> <br> This API is under construction");
});

// app.get("/api/mysql", async (req, res) => {
//   const results = await BancodeDados.testeDB();
//   res.status(200);
//   res.json(results);
//   res.end();
// });

// User
app.post("/api/user/login", async (req, res) => {
  const loginResponse = await User.login(req);
  res.status(200);
  res.json(loginResponse);
  res.end();
});

app.post("/api/user/register", async (req, res) => {
  const registerResponse = await User.register(req);
  res.status(200);
  res.json(registerResponse);
  res.end();
});

// Customer
app.post("/api/customer/register", async (req, res) => {
  await Customer.register(req);
  await Property.register(req);
  res.status(200);
  res.end();
});

app.get("/api/customer/:cpf", async (req, res) => {
  const properties = await Customer.consult(req);
  res.status(200);
  res.json(properties);
  res.end();
});

// Property
app.post("/api/property/register", async (req, res) => {
  await Property.register(req);
  res.status(200);
  res.end();
});

//City
app.post("/api/city/register", async (req, res) => {
  await City.register(req);
  res.status(200);
  res.end();
});

app.listen(3001);
