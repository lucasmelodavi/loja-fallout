import express from "express";
import loginRoutes from "./routes/login.js";

const app = express();

app.use(express.json());


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.sendStatus(200);

  next();
});

app.use("/login", loginRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});