const {
  getTickets,
  activateTicket,
  deleteTicket,
} = require('../controllers/lawyerDashboard');
const authMiddleware = require('../middleware/auth');
const router = require('express').Router();

router.get('/lawyerDashboard/:id', authMiddleware, getTickets);
router.put('/lawyerDashboard/activate/:id', authMiddleware, activateTicket);
router.delete('/lawyerDashboard/delete/:id', authMiddleware, deleteTicket);

module.exports = router;
