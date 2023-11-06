// database.js
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('quiz.db', (err) => {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('Connected to the quiz database.');
});

module.exports = db;
