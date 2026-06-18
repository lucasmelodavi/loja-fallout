import { open } from "sqlite";
import sqlite3 from "sqlite3";

let db;

async function start() {
  db = await open({
    filename: "./banco.db",
    driver: sqlite3.Database,
  });
  console.log("Banco conectado");

}

start();
