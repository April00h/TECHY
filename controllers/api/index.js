const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');

router.use('/user', userRoutes);

router.use('/post', postRoutes);

module.exports = router;
