import express from "express";
import { db } from "../db.js";

const router = express.Router();

router.get("/login/:id", async (req, res) => {
  const user = await db.get("SELECT * FROM usuarios WHERE id = ?", [
    req.params.id,
  ]);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({
      error: "Acesso negado",
    });
  }
});

export default router;
