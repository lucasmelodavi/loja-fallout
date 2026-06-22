import express from "express";
import cors from "cors";
import loginRoutes from "./routes/login.js";
import itensRoutes from "./routes/itens.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/login", loginRoutes);
app.use("/itens", itensRoutes)


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