const mongoose = require('mongoose');

const savingsGoalSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    targetAmount: {
        type: Number,
        required: true
    },
    currentAmount: {
        type: Number,
        default: 0
    },
    deadline: {
        type: Date,
        required: true
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

savingsGoalSchema.methods.updateCurrentAmount = function(amount) {
    this.currentAmount += amount;
    this.updatedAt = Date.now();
    return this.save();
};

savingsGoalSchema.methods.isGoalAchieved = function() {
    return this.currentAmount >= this.targetAmount;
};

const SavingsGoal = mongoose.model('SavingsGoal', savingsGoalSchema);

module.exports = SavingsGoal;