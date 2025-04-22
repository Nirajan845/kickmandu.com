const express = require('express');
const router = express.Router();
const { savePhoneNumber, getCartItems } = require('../controllers/cartController');

router.post('/save-phone', savePhoneNumber);
router.get('/items', getCartItems);

module.exports = router;
