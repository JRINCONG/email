const { getAll } = require('../controllers/envio.controllers');
const express = require('express');

const routerEnvio = express.Router();




routerEnvio.route('/')
    .post(getAll);



module.exports = routerEnvio;