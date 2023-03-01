const authMiddleware = require('../middleware/auth');
const adminMiddleware = require('../middleware/admin');
const getAdmin = require('../controllers/admin');

const adminRouter = require('express').Router();

adminRouter.get('/admin', authMiddleware, adminMiddleware, getAdmin);

module.exports = adminRouter;
