const router = require('express').Router();
const notesRenderRoutes = require('./notesRender');
// const notesHomeRoutes = require('./notesHome');

router.use(notesRenderRoutes);
// router.use(notesHomeRoutes);

module.exports = router;