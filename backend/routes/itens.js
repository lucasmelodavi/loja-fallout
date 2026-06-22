import express from "express";
import { db } from "../db.js";

const router = express.Router();

router.get("/", (req, res) => {
  db.all(
    "SELECT * FROM itens",
    [],
    (err, itens) => {
      if (err) {
        return res.json({
          ok: false,
          error: err.message,
        });
      }

      return res.json({
        ok: true,
        itens,
      });
    }
  );
});

export default router;