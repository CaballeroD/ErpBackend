const express = require('express');
const router = express.Router();

const Articulo = require('../models/Articulo')

router.get('/', async (req, res) => {
    const Articulos = await Articulo.find();
    res.json(Articulos);
})


module.exports = router;