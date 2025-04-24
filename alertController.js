const Alert = require('../models/Alert');

// Create a new alert
exports.createAlert = async (req, res) => {
    try {
        const { userId, threshold } = req.body;
        const newAlert = new Alert({ userId, threshold });
        await newAlert.save();
        res.status(201).json({ message: 'Alert created successfully', alert: newAlert });
    } catch (error) {
        res.status(500).json({ message: 'Error creating alert', error });
    }
};

// Get alerts for a user
exports.getAlerts = async (req, res) => {
    try {
        const { userId } = req.params;
        const alerts = await Alert.find({ userId });
        res.status(200).json(alerts);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving alerts', error });
    }
};

// Update an alert
exports.updateAlert = async (req, res) => {
    try {
        const { alertId } = req.params;
        const updatedAlert = await Alert.findByIdAndUpdate(alertId, req.body, { new: true });
        res.status(200).json({ message: 'Alert updated successfully', alert: updatedAlert });
    } catch (error) {
        res.status(500).json({ message: 'Error updating alert', error });
    }
};

// Delete an alert
exports.deleteAlert = async (req, res) => {
    try {
        const { alertId } = req.params;
        await Alert.findByIdAndDelete(alertId);
        res.status(200).json({ message: 'Alert deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting alert', error });
    }
};