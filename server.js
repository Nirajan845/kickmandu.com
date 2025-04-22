require('dotenv').config(); // Load .env file
const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI; // should not be undefined
console.log('Mongo URI:', process.env.MONGO_URI);

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));
const express = require('express');
const cors = require('cors');
const PhoneNumber = require('./models/PhoneNumber');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/cart', async (req, res) => {
  const { number } = req.body;

  if (!/^(97|98)\d{8}$/.test(number)) {
    return res.status(400).json({ error: 'Invalid phone number' });
  }

  try {
    const saved = await PhoneNumber.create({ number });
    res.status(201).json({ message: 'Phone number saved', data: saved });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
