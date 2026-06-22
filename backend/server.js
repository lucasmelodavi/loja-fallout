import express from "express";
import cors from "cors";

import loginRoutes from "./routes/login.js";
import itensRoutes from "./routes/itens.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/login", loginRoutes);
app.use("/itens", itensRoutes);

app.listen(4000, () => {
  console.log("Servidor rodando na porta 4000");
});