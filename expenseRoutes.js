const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

// Route to log a new expense
router.post('/expenses', expenseController.logExpense);

// Route to retrieve all expenses for a user
router.get('/expenses', expenseController.getExpenses);

// Route to retrieve a specific expense by ID
router.get('/expenses/:id', expenseController.getExpenseById);

// Route to update an existing expense
router.put('/expenses/:id', expenseController.updateExpense);

// Route to delete an expense
router.delete('/expenses/:id', expenseController.deleteExpense);

module.exports = router;