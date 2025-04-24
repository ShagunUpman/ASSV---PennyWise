const Payment = require('../models/Payment');

// Confirm payment and handle reflective questions
exports.confirmPayment = async (req, res) => {
    try {
        const { userId, amount, paymentMethod } = req.body;

        // Create a new payment record
        const payment = new Payment({
            userId,
            amount,
            paymentMethod,
            date: new Date()
        });

        await payment.save();

        // Reflective question to discourage impulsive spending
        const reflectiveQuestion = "Are you sure this purchase aligns with your budget goals?";
        
        res.status(201).json({
            message: "Payment confirmed successfully.",
            reflectiveQuestion
        });
    } catch (error) {
        res.status(500).json({ message: "Error confirming payment.", error });
    }
};