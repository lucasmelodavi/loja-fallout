import express from "express";
import { connectDB } from "./db.js";

import loginRoutes from "./routes/login.js";
import lojaRoutes from "./routes/loja.js";

const app = express();

app.use(express.json());

await connectDB();

app.use(loginRoutes);
app.use(lojaRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});