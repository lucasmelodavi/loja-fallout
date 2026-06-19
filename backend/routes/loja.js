import express from "express";
import { db } from "../db.js";

const router = express.Router();

router.get("/loja", async (req, res) => {
  const itens = await db.all("SELECT * FROM itens");

  res.json(itens);
});

export default router;