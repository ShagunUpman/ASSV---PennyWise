const express = require('express');
const budgetController = require('../controllers/budgetController');

const router = express.Router();

// Route to set a user budget
router.post('/set-budget', budgetController.setBudget);

// Route to get a user's budget
router.get('/get-budget/:userId', budgetController.getBudget);

// Route to get budget summary
router.get('/budget-summary/:userId', budgetController.getBudgetSummary);

module.exports = router;