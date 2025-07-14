const sqlite = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'index.db');
const db = new sqlite.Database(dbPath);

module.exports = db;
