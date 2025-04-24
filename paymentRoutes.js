const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

// Route for confirming payments
router.post('/confirm', paymentController.confirmPayment);

// Route for handling reflective questions
router.post('/reflect', paymentController.handleReflectiveQuestion);

module.exports = router;