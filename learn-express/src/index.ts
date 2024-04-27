import express from "express";
import { users, findUser, nameChanger } from "./utils.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (request, response) => {
  response.status(200).send(`<h1>Express.JS Web Server</h1>`);
});

app.get("/api/users", (req, res) => {
  res.send(users);
});

app.get("/api/users/:id", (req, res) => {
  res.send(findUser(req.params.id));
});

app.get("/api/namechanger/:name", (req, res) => {
  res.send(nameChanger(req.params.name));
});

app.listen(PORT, () => {
  // console.log(`Server running on port ${PORT}`);
});
