const express = require('express');
const routerEnvio = require('./envio.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/contact',routerEnvio)



module.exports = router;