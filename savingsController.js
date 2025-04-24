const SavingsGoal = require('../models/SavingsGoal');

// Create a new savings goal
exports.createSavingsGoal = async (req, res) => {
    try {
        const { userId, targetAmount, targetDate } = req.body;
        const savingsGoal = new SavingsGoal({ userId, targetAmount, targetDate });
        await savingsGoal.save();
        res.status(201).json({ message: 'Savings goal created successfully', savingsGoal });
    } catch (error) {
        res.status(500).json({ message: 'Error creating savings goal', error });
    }
};

// Get all savings goals for a user
exports.getSavingsGoals = async (req, res) => {
    try {
        const { userId } = req.params;
        const savingsGoals = await SavingsGoal.find({ userId });
        res.status(200).json(savingsGoals);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving savings goals', error });
    }
};

// Update a savings goal
exports.updateSavingsGoal = async (req, res) => {
    try {
        const { goalId } = req.params;
        const updates = req.body;
        const savingsGoal = await SavingsGoal.findByIdAndUpdate(goalId, updates, { new: true });
        if (!savingsGoal) {
            return res.status(404).json({ message: 'Savings goal not found' });
        }
        res.status(200).json({ message: 'Savings goal updated successfully', savingsGoal });
    } catch (error) {
        res.status(500).json({ message: 'Error updating savings goal', error });
    }
};

// Delete a savings goal
exports.deleteSavingsGoal = async (req, res) => {
    try {
        const { goalId } = req.params;
        const savingsGoal = await SavingsGoal.findByIdAndDelete(goalId);
        if (!savingsGoal) {
            return res.status(404).json({ message: 'Savings goal not found' });
        }
        res.status(200).json({ message: 'Savings goal deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting savings goal', error });
    }
};