const Budget = require('../models/Budget');

// Create a new budget
exports.createBudget = async (req, res) => {
    try {
        const { userId, amount } = req.body;
        const budget = new Budget({ userId, amount });
        await budget.save();
        res.status(201).json({ message: 'Budget created successfully', budget });
    } catch (error) {
        res.status(500).json({ message: 'Error creating budget', error });
    }
};

// Get user's budget
exports.getBudget = async (req, res) => {
    try {
        const { userId } = req.params;
        const budget = await Budget.findOne({ userId });
        if (!budget) {
            return res.status(404).json({ message: 'Budget not found' });
        }
        res.status(200).json(budget);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving budget', error });
    }
};

// Update user's budget
exports.updateBudget = async (req, res) => {
    try {
        const { userId } = req.params;
        const { amount } = req.body;
        const budget = await Budget.findOneAndUpdate({ userId }, { amount }, { new: true });
        if (!budget) {
            return res.status(404).json({ message: 'Budget not found' });
        }
        res.status(200).json({ message: 'Budget updated successfully', budget });
    } catch (error) {
        res.status(500).json({ message: 'Error updating budget', error });
    }
};

// Get budget summary
exports.getBudgetSummary = async (req, res) => {
    try {
        const { userId } = req.params;
        const budget = await Budget.findOne({ userId });
        if (!budget) {
            return res.status(404).json({ message: 'Budget not found' });
        }
        // Assuming we have a method to calculate summary
        const summary = {
            totalBudget: budget.amount,
            // Add more summary calculations as needed
        };
        res.status(200).json(summary);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving budget summary', error });
    }
};