import express from "express";
import { db } from "../db.js";

const router = express.Router();

router.post("/", (req, res) => {
  const { id } = req.body;

  console.log("ID RECEBIDO:", id);

  db.get(
    "SELECT * FROM usuarios WHERE id = ?",
    [id],
    (err, user) => {
      if (err) {
        console.log("ERRO:", err);

        return res.json({
          ok: false,
          error: err.message,
        });
      }

      if (!user) {
        return res.json({
          ok: false,
          message: "Usuário não encontrado",
        });
      }

      console.log("USER:", user);

      return res.json({
        ok: true,
        user,
      });
    }
  );
});

export default router;