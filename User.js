const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    budget: {
        type: Number,
        default: 0
    },
    savingsGoals: [{
        goalName: String,
        targetAmount: Number,
        currentAmount: {
            type: Number,
            default: 0
        },
        dueDate: Date
    }]
});

// Method to find user by username
userSchema.statics.findByUsername = function(username) {
    return this.findOne({ username });
};

// Method to find user by email
userSchema.statics.findByEmail = function(email) {
    return this.findOne({ email });
};

// Method to create a new user
userSchema.statics.createUser = function(userData) {
    const user = new this(userData);
    return user.save();
};

const User = mongoose.model('User', userSchema);

module.exports = User;