const express = require('express');
const db = require('./database');

const router = express.Router();

// Get Questions
router.get('/list', (req, res) => {
  db.all('SELECT question, options, correctAnswer FROM questions', (err, rows) => {
    if(err) {
      return res.status(500).json({ error: err.message})
    }
    // Transform the options string into an array
    const formattedQuestions = rows.map((row) => ({
      question: row.question,
      options: JSON.parse(row.options),
      // correctAnswer: row.correctAnswer,
      correctAnswer: encodeAnswer(row.correctAnswer),
    }));

    res.status(200).json(formattedQuestions);
  });
});

// Define a simple encoding function (you should use a more secure method)
function encodeAnswer(answer) {
  // This is just an example; you should use a more secure encoding/encryption method
  return Buffer.from(answer).toString('base64');
}

// Create qustions
router.post('/create', (req, res) => {
  const { question, options, correctAnswer } = req.body;

  // Validate the request body
  if (!question || !options || !correctAnswer) {
    return res.status(400).json({ error: "Missing request field" });
  }
  if (!Array.isArray(options) || options.length < 2) {
    return res.status(400).json({ error: "Invalid options" });
  }

  // Insert the new question into the database
  db.run(
    'INSERT INTO questions (question, options, correctAnswer) VALUES (?, ?, ?)',
    [question, JSON.stringify(options), correctAnswer],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      // Return a JSON response containing the newly created question
      res.status(201).json({
        id: this.lastID,
        question,
        options,
        correctAnswer,
      });
    }
  );
});

// Update a question
router.put('/update/:id', (req, res) => {
  const questionId = req.params.id;
  const { question, options, correctAnswer } = req.body;

  // Validate the request body
  if (!question || !options || !correctAnswer) {
    return res.status(400).json({ error: "Missing request field" });
  }
  if (!Array.isArray(options) || options.length < 2) {
    return res.status(400).json({ error: "Invalid options" });
  }

  db.run(
    'UPDATE questions SET question = ?, options = ?, correctAnswer = ? WHERE id = ?',
    [question, JSON.stringify(options), correctAnswer, questionId],
    (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(200).json({ message: 'Question updated successfully' });
    }
  );
});

// Delete a question
router.delete('/delete/:id', (req, res) => {
  const questionId = req.params.id;

  db.run('DELETE FROM questions WHERE id = ?', questionId, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: 'Question deleted successfully' });
  });
});

module.exports = router;