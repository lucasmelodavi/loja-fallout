import sqlite3 from "sqlite3";
import { open } from "sqlite";

async function createEPopularUserTable(name, surname) {
  const db = await open({
    filename: "./ESTOQUE_VENDAS",
    driver: sqlite3.Database,
  });

  db.run(
    "CREATE TABLE IF NOT EXISTS usuarios (id INTERDER PRIMARY KEY ,name TEXT, surname TEXT)",
  );
  db.run('INSERT INTO usuarios (name, surname) VALUES (?,?)' ,[
    name,
    surname,
  ]);
}

createEPopularUserTable('Daniel','Douglas');
