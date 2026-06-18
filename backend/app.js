import { open } from "sqlite";
import sqlite3 from "sqlite3";

let db;

async function login(id) {
  const user = await db.get(
    "SELECT * FROM usuarios WHERE id = ?", [id]
);
return user ;
}

async function start() {
  db = await open({
    filename: "./Banco.db",
    driver: sqlite3.Database,
  });
  console.log("===== LOGIN ======");
  const user = await login("10012");

  if (user) {
    console.log("ID:", user.id);
    console.log("Nome:", user.Sobrevivente);
    console.log("Tampas:", user["tampas "]);
    console.log("=================");
  } else {
    console.log("Acesso negado");
  }
}

start();
