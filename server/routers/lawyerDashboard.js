const { getTickets } = require('../controllers/lawyerDashboard');
const authMiddleware = require('../middleware/auth');
const router = require('express').Router();

router.get('/lawyerDashboard', authMiddleware, getTickets);

module.exports = router;
