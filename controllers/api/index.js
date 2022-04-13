const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogpRoutes = require('./blogpRoutes');

router.use('/users', userRoutes);
router.use('/blogposts', blogpRoutes);

module.exports = router;
