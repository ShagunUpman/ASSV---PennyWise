const express = require('express');
const router = express.Router();
const savingsController = require('../controllers/savingsController');

// Route to set a savings goal
router.post('/goals', savingsController.setSavingsGoal);

// Route to get all savings goals for a user
router.get('/goals', savingsController.getSavingsGoals);

// Route to update a savings goal
router.put('/goals/:id', savingsController.updateSavingsGoal);

// Route to delete a savings goal
router.delete('/goals/:id', savingsController.deleteSavingsGoal);

// Route to track progress on a savings goal
router.post('/goals/:id/progress', savingsController.trackSavingsProgress);

module.exports = router;