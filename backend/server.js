const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');
const db = require('./database');
const sampleQuestions = require('./dummy_data');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// Define the database schema and create tables
const createDatabase = async () => {
  return new Promise((resolve, reject) => {
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
        reject(err);
      } else {
        console.log('Questions table created or already exists');
        resolve();
      }
    });
  });
};

// Create questions and insert sample questions into the database
const createQuestions = async () => {
  // Insert sample questions into the database
  for (const sampleQuestion of sampleQuestions) {
    // Check if a question with the same text already exists in the database
    const existingQuestion = await new Promise((resolve, reject) => {
      db.get('SELECT id FROM questions WHERE question = ?', [sampleQuestion.question], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });

    if (!existingQuestion) {
      // If the question doesn't exist, insert it
      try {
        await db.run(
          'INSERT INTO questions (question, options, correctAnswer) VALUES (?, ?, ?)',
          [sampleQuestion.question, JSON.stringify(sampleQuestion.options), sampleQuestion.correctAnswer]
        );
        console.log('Sample question inserted successfully.');
      } catch (err) {
        console.error('Error inserting sample question:', err);
      }
    } else {
      console.log('Sample question already exists in the database:', sampleQuestion.question);
    }
  }
};


// Call the createDatabase and createQuestions functions
createDatabase()
  .then(() => createQuestions())
  .then(() => {
    // Define routes using 'routes' and start the server
    app.use('/question', routes);

    // Listening port
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Error initializing the database:', err);
  });
