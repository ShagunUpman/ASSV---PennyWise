const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('../routes/authRoutes');
const budgetRoutes = require('../routes/budgetRoutes');
const expenseRoutes = require('../routes/expenseRoutes');
const alertRoutes = require('../routes/alertRoutes');
const paymentRoutes = require('../routes/paymentRoutes');
const recommendationRoutes = require('../routes/recommendationRoutes');
const savingsRoutes = require('../routes/savingsRoutes');
const authMiddleware = require('../middlewares/authMiddleware');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(authMiddleware);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/budget', budgetRoutes);
app.use('/api/expense', expenseRoutes);
app.use('/api/alert', alertRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/recommendation', recommendationRoutes);
app.use('/api/savings', savingsRoutes);

// Database connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Database connection error:', err);
    });