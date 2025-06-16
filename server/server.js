const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3001;

app.use(cors());

const dbPath = path.join(__dirname, 'forNewsData.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Помилка підключення до бази:', err.message);
  } else {
    console.log('Базу підключено успішно');
  }
});

// Всі новини
app.get('/news', (req, res) => {
  const query = 'SELECT * FROM news ORDER BY date DESC';
  db.all(query, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

// Одна новина за slug
app.get('/news/:slug', (req, res) => {
  const query = 'SELECT * FROM news WHERE slug = ? LIMIT 1';
  db.get(query, [req.params.slug], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (!row) {
      res.status(404).json({ error: 'Новина не знайдена' });
    } else {
      res.json(row);
    }
  });
});


app.listen(port, () => {
  console.log(`Сервер працює на http://localhost:${port}`);
});
