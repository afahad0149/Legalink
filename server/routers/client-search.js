const getLawyers = require('../controllers/search');
const authMiddleware = require('../middleware/auth');
const router = require('express').Router();

/* Auth Routes */
router.get('/client-search', authMiddleware, getLawyers);

module.exports = router;