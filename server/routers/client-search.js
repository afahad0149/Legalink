const {
  getLawyers,
  getSingleLawyer,
  postTicket,
} = require('../controllers/search');
const authMiddleware = require('../middleware/auth');
const router = require('express').Router();

router.get('/client-search', authMiddleware, getLawyers);
router.get('/lawyer/:id', authMiddleware, getSingleLawyer);
router.post('/lawyer/post-ticket', authMiddleware, postTicket);

module.exports = router;
