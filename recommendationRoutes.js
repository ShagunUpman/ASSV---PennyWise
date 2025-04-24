const express = require('express');
const router = express.Router();
const recommendationController = require('../controllers/recommendationController');

// Endpoint to get recommendations based on user transaction history
router.get('/recommendations', recommendationController.getRecommendations);

// Endpoint to create a new recommendation
router.post('/recommendations', recommendationController.createRecommendation);

// Endpoint to update an existing recommendation
router.put('/recommendations/:id', recommendationController.updateRecommendation);

// Endpoint to delete a recommendation
router.delete('/recommendations/:id', recommendationController.deleteRecommendation);

module.exports = router;