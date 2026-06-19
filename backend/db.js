import { open } from "sqlite";
import sqlite3 from "sqlite3";

export let db;

export async function connectDB() {
  db = await open({
    filename: "./Banco.db",
    driver: sqlite3.Database,
  });

  console.log("Acesso Permitido");
}