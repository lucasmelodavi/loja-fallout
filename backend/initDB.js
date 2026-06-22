import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./Banco.db");

db.run(`
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  nome TEXT,
  tampas INTEGER
);
`);

db.run(`INSERT OR IGNORE INTO users VALUES ("123", "Teste", 100)`);

console.log("BANCO INICIALIZADO");