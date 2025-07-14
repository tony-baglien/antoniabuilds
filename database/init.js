const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join (__dirname, 'index.db');
const db = new sqlite3.Database(dbPath);

console.log("Initializng Database...")

db.run(`CREATE TABLE IF NOT EXISTS users(
id INTEGER PRIMARY KEY AUTOINCREMENT,
username TEXT UNIQUE,
password TEXT UNIQUE
)`)

db.close((err) => {
  if (err) {
    console.err(`Error closing database:`, err);
  } else{
    console.log('Database initialized successfully!')
  }
});
