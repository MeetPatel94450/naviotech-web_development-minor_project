require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const authMiddleware = require('./middleware/auth');
const db = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('API running 🚀');
});

app.get('/api/user', authMiddleware, async (req, res) => {
  try {
    console.log("TOKEN DATA:", req.user); // debug

    const [rows] = await db.query(
      'SELECT email FROM users WHERE id = ?',
      [req.user.id]
    );

    if (rows.length === 0) {
      return res.json({ email: null });
    }

    res.json({ email: rows[0].email });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));