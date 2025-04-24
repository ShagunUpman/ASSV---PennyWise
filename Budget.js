const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    totalBudget: {
        type: Number,
        required: true
    },
    currentSpending: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

budgetSchema.methods.updateSpending = function(amount) {
    this.currentSpending += amount;
    this.updatedAt = Date.now();
    return this.save();
};

budgetSchema.methods.resetBudget = function(newTotal) {
    this.totalBudget = newTotal;
    this.currentSpending = 0;
    this.updatedAt = Date.now();
    return this.save();
};

const Budget = mongoose.model('Budget', budgetSchema);

module.exports = Budget;