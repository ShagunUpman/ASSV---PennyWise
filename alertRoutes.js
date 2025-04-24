const express = require('express');
const router = express.Router();
const alertController = require('../controllers/alertController');

// Route to create a new alert
router.post('/', alertController.createAlert);

// Route to get all alerts for a user
router.get('/:userId', alertController.getAlerts);

// Route to update an alert
router.put('/:alertId', alertController.updateAlert);

// Route to delete an alert
router.delete('/:alertId', alertController.deleteAlert);

module.exports = router;