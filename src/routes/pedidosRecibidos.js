const express = require('express');
const router = express.Router();

const PedidoRecibido = require('../models/PedidoRecibido')

router.get('/', async (req, res) => {
    const pedidos = await PedidoRecibido.find();
    res.json(pedidos);
})

router.post('/', async (req, res) => {
    console.log(req.body);
    const pedido = new PedidoRecibido(req.body);
    console.log(pedido);
    await pedido.save();
    res.json({
        status: 'pedidos Saved'
    });
})

router.put('/:id', async (req, res) => {
    await PedidoRecibido.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: 'pedido Updated'
    });

})
router.delete('/deleteall', async (req, res) => {

    await PedidoRecibido.deleteMany({}, function (err) { });
    res.json({
        status: 'all deleted'
    });
})

router.delete('/:id', async (req, res) => {
    await PedidoRecibido.findByIdAndRemove(req.params.id, req.body);
    res.json({
        status: 'pedido Deleted'
    });
})


module.exports = router;