import sqlite3 from "sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

sqlite3.verbose();

const dbPath = path.join(__dirname, "Banco.db");

export const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.log("❌ ERRO BANCO:", err.message);
  } else {
    console.log("✅ BANCO CONECTADO");
  }
});