const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./blostPostRoutes');

router.use('/users', userRoutes);
router.use('/blogPost', postRoutes);

module.exports = router;
