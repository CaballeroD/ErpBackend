const express = require('express');
const router = express.Router();

const Pedido = require('../models/Pedido')

router.get('/', async (req, res) => {
    const pedidos = await Pedido.find();
    res.json(pedidos);
})

router.post('/', async (req, res) => {
    console.log(req.body);
    const pedido = new Pedido(req.body);
    console.log(pedido);
    await pedido.save();
    res.json({
        status: 'pedidos Saved'
    });
})

router.put('/:id', async (req, res) => {
    await Pedido.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: 'pedido Updated'
    });

})
router.delete('/deleteall', async (req, res) => {

    await Pedido.deleteMany({}, function (err) { });
    res.json({
        status: 'all deleted'
    });
})

router.delete('/:id', async (req, res) => {
    await Pedido.findByIdAndRemove(req.params.id, req.body);
    res.json({
        status: 'pedido Deleted'
    });
})


module.exports = router;