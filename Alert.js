const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    threshold: {
        type: Number,
        required: true
    },
    alertType: {
        type: String,
        enum: ['SPENDING', 'SAVINGS'],
        required: true
    },
    message: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

alertSchema.methods.sendAlert = function() {
    // Logic to send alert to the user
};

const Alert = mongoose.model('Alert', alertSchema);

module.exports = Alert;