const User = require('../models/User');

// Save phone number to database
exports.savePhoneNumber = async (req, res) => {
  const { phoneNumber } = req.body;
  if (!phoneNumber || !/^98|97/.test(phoneNumber)) {
    return res.status(400).json({ message: 'Invalid phone number format' });
  }

  try {
    const newUser = new User({ phoneNumber });
    await newUser.save();
    res.status(201).json({ message: 'Phone number saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving phone number' });
  }
};

// Return dummy cart items
exports.getCartItems = (req, res) => {
  const items = Array.from({ length: 20 }).map((_, i) => ({
    id: i + 1,
    name: `Sneaker ${i + 1}`,
    price: Math.floor(Math.random() * 5000) + 1000,
    image: `https://via.placeholder.com/150?text=Sneaker+${i + 1}`,
  }));
  res.json(items);
};
