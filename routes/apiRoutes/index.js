const router = require('express').Router();
const notesRoutes = require('./noteRoutes')

// Uses middleware
router.use(notesRoutes);

module.exports = router;