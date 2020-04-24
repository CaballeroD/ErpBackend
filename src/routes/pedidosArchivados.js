const express = require('express');
const router = express.Router();

const PedidosArchivados = require('../models/PedidosArchivados')

router.get('/', async (req, res) => {
    const pedidos = await PedidosArchivados.find();
    res.json(pedidos);
})

router.post('/', async (req, res) => {

    console.log(req.body);
    const pedido = new PedidosArchivados(req.body);
    console.log(pedido);
    await pedido.save();
    res.json({
        status: 'pedidos Saved'
    });
})

router.put('/:id', async (req, res) => {
    await PedidosArchivados.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: 'pedido Updated'
    });

})
router.delete('/deleteall', async (req, res) => {

    await PedidosArchivados.deleteMany({}, function (err) { });
    res.json({
        status: 'all deleted'
    });
})

router.delete('/:id', async (req, res) => {
    await PedidosArchivados.findByIdAndRemove(req.params.id, req.body);
    res.json({
        status: 'pedido Deleted'
    });
})


module.exports = router;