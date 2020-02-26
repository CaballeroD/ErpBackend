const express = require('express');
const router = express.Router();

const Articulo = require('../models/Articulo')

router.get('/', async (req, res) => {
    const Articulos = await Articulo.find();
    res.json(Articulos);
})
router.post('/', async (req, res) => {
    console.log(req.body);
    const articulo = new Articulo(req.body);
    console.log(articulo);
    await articulo.save();
    res.json({
        status: 'Articulo Saved'
    });
})

router.put('/:id', async (req, res) => {
    console.log(req.body);
    await Articulo.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: 'Articulo Updated'
    });

})
router.delete('/deleteall', async (req, res) => {

    await Articulo.deleteMany({}, function (err) { });
    res.json({
        status: 'all deleted'
    });
})

router.delete('/:id', async (req, res) => {
    await Articulo.findByIdAndRemove(req.params.id, req.body);
    res.json({
        status: 'Articulo Deleted'
    });
})

module.exports = router;