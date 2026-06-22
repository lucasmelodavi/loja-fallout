import express from "express";
import { db } from "../db.js";

console.log("ITENS.JS CARREGADO");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("ROTA /ITENS CHAMADA");

  db.all(
    "SELECT * FROM itens",
    [],
    (err, itens) => {
      if (err) {
        console.log("ERRO:", err);

        return res.json({
          ok: false,
          error: err.message,
        });
      }

      console.log("ITENS:", itens);

      return res.json({
        ok: true,
        itens,
      });
    }
  );
});

export default router;