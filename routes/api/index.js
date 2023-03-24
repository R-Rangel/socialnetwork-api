const router = require('express').Router();
const friendRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');

router.use('/api/friends', friendRoutes);
router.use('/api/users', userRoutes);

module.exports = router;
