const Expense = require('../models/Expense');

// Log a new expense
exports.logExpense = async (req, res) => {
    try {
        const { userId, amount, category, description } = req.body;
        const newExpense = new Expense({ userId, amount, category, description });
        await newExpense.save();
        res.status(201).json({ message: 'Expense logged successfully', expense: newExpense });
    } catch (error) {
        res.status(500).json({ message: 'Error logging expense', error: error.message });
    }
};

// Retrieve all expenses for a user
exports.getExpenses = async (req, res) => {
    try {
        const { userId } = req.params;
        const expenses = await Expense.find({ userId });
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving expenses', error: error.message });
    }
};

// Retrieve a breakdown of expenses for a user
exports.getExpenseBreakdown = async (req, res) => {
    try {
        const { userId } = req.params;
        const expenses = await Expense.find({ userId });
        const breakdown = expenses.reduce((acc, expense) => {
            acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
            return acc;
        }, {});
        res.status(200).json(breakdown);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving expense breakdown', error: error.message });
    }
};