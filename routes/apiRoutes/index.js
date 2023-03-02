const router = require('express').Router();
const notesRoutes = require('./notesRoutes')

// Uses middleware
router.use(notesRoutes);

module.exports = router;