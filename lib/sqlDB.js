import path from "path";
import fs from "fs";
import sql from "better-sqlite3";

// Use a writable location in serverless environments
const dbPath = path.resolve(
  process.env.NODE_ENV === "production" ? "/tmp" : process.cwd(),
  "users.db"
);

// Ensure the database file is writable or can be created
fs.access(path.dirname(dbPath), fs.constants.W_OK, (err) => {
  if (err) {
    console.error(`Cannot write to directory: ${path.dirname(dbPath)}`);
  }
});

// Initialize SQLite database
const db = sql(dbPath);

// Create tables if they do not exist
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    email TEXT UNIQUE,
    password TEXT
  );
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS sessions (
    id TEXT NOT NULL PRIMARY KEY,
    expires_at INTEGER NOT NULL,
    user_id TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
  );
`);

export default db;
