const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    amount: {
        type: Number,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true,
        enum: ['credit_card', 'debit_card', 'paypal', 'bank_transfer']
    },
    date: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,
        required: false
    }
});

paymentSchema.methods.confirmPayment = function() {
    // Logic to confirm payment
};

paymentSchema.statics.findByUserId = function(userId) {
    return this.find({ userId });
};

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;