const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const db = require('./database');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Define the database schema and create tables
db.run(`
  CREATE TABLE IF NOT EXISTS questions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    question TEXT NOT NULL,
    options TEXT NOT NULL,
    correctAnswer TEXT NOT NULL
  )
`, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Questions table created or already exists');
  }
});

// Use routes for handling questions
app.use('/question', routes);

// Listening port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
